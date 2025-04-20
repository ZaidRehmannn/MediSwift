import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { url, addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  const fetchProduct = async () => {
    const response = await axios.get(url + `/api/medicine/product/${id}`);
    if (response.data.success) {
      setProduct(response.data.product);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className='max-w-5xl mx-auto mt-10 p-4'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Product Image */}
        <div className='flex-shrink-0 w-full md:w-[400px] h-[400px]'>
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover rounded-xl shadow-md'
          />
        </div>

        {/* Product Info */}
        <div className='flex-1 flex flex-col'>
          <div>
            <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
            <p className='text-gray-600 mb-4'>{product.description}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
              <p><span className='font-semibold'>Price:</span> ${product.price}</p>
              <p><span className='font-semibold'>Category:</span> {product.category}</p>
              <p><span className='font-semibold'>Dosage:</span> {product.dosage}</p>
              <p><span className='font-semibold'>Age Group:</span> {product.age_group}</p>
            </div>
          </div>
          {!cartItems[id] ? (
            <button className='mt-10 bg-green-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg w-full md:w-fit' onClick={() => addToCart(id)}>
              Add to Cart
            </button>
          ) : (
            <div className='mt-10 flex items-center gap-6'>
              <div className='flex items-center justify-between border border-green-600 rounded-xl px-4 py-2 shadow-sm w-fit'>
                <img
                  className='w-8 cursor-pointer'
                  src={assets.remove_icon_red}
                  onClick={() => removeFromCart(id)}
                  alt="Remove"
                />
                <p className='text-lg font-medium px-4'>{cartItems[id]}</p>
                <img
                  className='w-8 cursor-pointer'
                  src={assets.add_icon_green}
                  onClick={() => addToCart(id)}
                  alt="Add"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
