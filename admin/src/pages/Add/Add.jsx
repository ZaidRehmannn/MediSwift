import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setdata({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      });
      setimage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  };

  const isFormComplete = data.name && data.description && data.price && image;

  return (
    <div className='add w-[70%] ml-[max(5vw,25px)] mt-7 text-[#6d6d6d] text-base'>
      <form className='flex flex-col gap-[10px]' onSubmit={onSubmitHandler}>

        <div className='add-img-upload flex flex-col gap-[10px]'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[120px] cursor-pointer' />
          </label>
          <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' hidden required />
        </div>

        <div className='add-product-name flex flex-col gap-[10px] w-[max(40%,280px)]'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='border-2 border-[#c5c5c5] p-2' required />
        </div>

        <div className='add-product-description flex flex-col gap-[10px] w-[max(40%,280px)]'>
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' className='border-2 border-[#c5c5c5] p-2' required></textarea>
        </div>

        <div className='add-category-price flex gap-8'>
          <div className='add-category flex flex-col gap-[10px]'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" className='border-2 border-[#c5c5c5] max-w-[120px] p-2'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex flex-col gap-[10px]'>
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' className='border-2 border-[#c5c5c5] max-w-[120px] p-2 h-[42px]' required />
          </div>
        </div>

        <button type='submit' className={`add-btn max-w-[120px] border-none p-2 bg-black text-white cursor-pointer ${!isFormComplete ? 'bg-gray-700 cursor-not-allowed' : ''}`} disabled={!isFormComplete}>ADD</button>

      </form>
    </div>
  )
}

export default Add
