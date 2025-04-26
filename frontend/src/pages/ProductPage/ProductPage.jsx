import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { url, addToCart, removeFromCart, cartItems, medicine_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const response = await axios.get(url + `/api/medicine/product/${id}`);
    if (response.data.success) {
      setProduct(response.data.product);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-full lg:max-w-6xl mx-auto mt-10 p-4">
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-center">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-[400px]">
          <div className="w-full h-[400px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col self-center">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
            <p><span className="font-semibold">Price:</span> ${product.price}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Dosage:</span> {product.dosage}</p>
            <p><span className="font-semibold">Age Group:</span> {product.age_group}</p>
          </div>

          {/* Cart Buttons */}
          {!cartItems[id] ? (
            <button
              className="mt-8 bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg w-full lg:w-fit"
              onClick={() => {
                addToCart(id);
                toast.success("Product Added to Cart");
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center justify-between border border-green-600 rounded-xl px-4 py-2 shadow-sm w-fit">
                <img
                  className="w-8 cursor-pointer"
                  src={assets.remove_icon_red}
                  onClick={() => {
                    removeFromCart(id);
                    if (cartItems[id] === 1) {
                      toast.error("Product Removed from Cart");
                    }
                  }}
                  alt="Remove"
                />
                <p className="text-lg font-medium px-4">{cartItems[id]}</p>
                <img
                  className="w-8 cursor-pointer"
                  src={assets.add_icon_green}
                  onClick={() => addToCart(id)}
                  alt="Add"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {medicine_list
            .filter(
              (medicine) =>
                medicine.category === product.category &&
                medicine._id !== product._id
            )
            .map((item) => (
              <div
                key={item._id}
                className="min-w-[140px] cursor-pointer border rounded-md hover:shadow-md p-2 bg-white"
                onClick={() => navigate(`/product/${item._id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 object-cover rounded"
                />
                <p className="text-sm mt-2 font-medium text-center">{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
