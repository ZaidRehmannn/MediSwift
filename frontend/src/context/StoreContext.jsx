import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setcartItems] = useState({});
    const url = import.meta.env.VITE_API_URL;
    const [token, settoken] = useState("");
    const [medicine_list, setmedicine_list] = useState(undefined);
    const [page, setpage] = useState("");
    const [activePageTrans, setPageTrans] = useState(false);
    const [movePage, setMovePage] = useState("");
    const [loader, setloader] = useState(false);

    const addToCart = async (itemId) => {
        let updatedCart;

        setcartItems((prev) => {
            const newCart = {
                ...prev,
                [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
            };
            updatedCart = newCart;

            if (!token) {
                localStorage.setItem('cartItems', JSON.stringify(newCart));
            }

            return newCart;
        });

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };


    const removeFromCart = async (itemId) => {

        setcartItems((prev) => {
            const updatedCart = { ...prev };

            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }

            if (!token) {
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            }

            return updatedCart;
        });

        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = medicine_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo?.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const fetchMedicineList = async () => {
        const response = await axios.get(url + "/api/medicine/list");
        setmedicine_list(response.data.data);
    };

    const loadCartData = async (token) => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setcartItems(JSON.parse(savedCart));
        } else {
            setcartItems({});
        }
    };


    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"));
            }
            await fetchMedicineList();
            await loadCartData(localStorage.getItem("token"));
        }
        loadData();
    }, [])

    const contextValue = {
        medicine_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        loadCartData,
        url,
        token,
        settoken,
        page,
        setpage,
        isOpen,
        setIsOpen,
        setPageTrans,
        activePageTrans,
        movePage,
        setMovePage,
        loader,
        setloader
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;