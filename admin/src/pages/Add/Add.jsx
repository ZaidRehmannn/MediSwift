import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Add.css';

const Add = ({ url }) => {
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Cold, Cough & Flu",
    dosage: "",
    age_group: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setdata(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    formData.append("dosage", data.dosage);
    formData.append("age_group", data.age_group);

    try {
      const response = await axios.post(`${url}/api/medicine/add`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setdata({
          name: "",
          description: "",
          price: "",
          category: "Cold, Cough & Flu",
          dosage: "",
          age_group: ""
        });
        setimage(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  const isFormComplete = data.name && data.description && data.price && image && data.dosage && data.age_group;

  return (
    <div className='add w-full h-full overflow-hidden flex justify-center'>
      <div className='w-[90%] max-w-[1100px] mt-7 text-[#6d6d6d] text-base h-full'>
        <form className='form-columns h-full overflow-y-auto pr-5 lg:pb-0 pb-20 flex flex-col gap-y-6' onSubmit={onSubmitHandler}>
          <div className='add-img-upload flex flex-col gap-[10px]'>
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[150px] cursor-pointer' />
            </label>
            <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' hidden required />
          </div>

          <div className='add-product-name flex flex-col gap-[10px] w-full pr-0 xl:pr-24 lg:pr-20'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='border-2 border-[#c5c5c5] p-2 w-full' required />
          </div>

          <div className='add-product-description flex flex-col gap-[10px] w-full pr-0 xl:pr-24 lg:pr-20'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' className='border-2 border-[#c5c5c5] p-2 w-full' required></textarea>
          </div>

          <div className='add-product-dosage flex flex-col gap-[10px] w-full pr-0 xl:pr-24 lg:pr-20'>
            <p>Product Dosage</p>
            <input onChange={onChangeHandler} value={data.dosage} type="text" name='dosage' placeholder='Type here' className='border-2 border-[#c5c5c5] p-2 w-full' required />
          </div>

          <div className='add-product-ageGroup flex flex-col gap-[10px] w-full pr-0 xl:pr-24 lg:pr-20'>
            <p>Age Group</p>
            <input onChange={onChangeHandler} value={data.age_group} type="text" name='age_group' placeholder='Type here' className='border-2 border-[#c5c5c5] p-2 w-full' required />
          </div>

          <div className='add-category-price w-full pr-0 xl:pr-24 lg:pr-20'>
            <div className='add-category flex flex-col gap-[10px] mb-4'>
              <p>Product Category</p>
              <select onChange={onChangeHandler} value={data.category} name="category" className='border-2 border-[#c5c5c5] p-2 w-full'>
                <option value="Cold, Cough & Flu">Cold, Cough & Flu</option>
                <option value="Pain & Fever Relief">Pain & Fever Relief</option>
                <option value="Digestive & Gut Health">Digestive & Gut Health</option>
                <option value="Skin & Wound Care">Skin & Wound Care</option>
                <option value="Vitamins & Supplements">Vitamins & Supplements</option>
                <option value="Chronic Condition Care">Chronic Condition Care</option>
                <option value="Eye, Ear & Oral Care">Eye, Ear & Oral Care</option>
                <option value="Children's Health">Children's Health</option>
              </select>
            </div>
            <div className='add-price flex flex-col gap-[10px]'>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$10' className='border-2 border-[#c5c5c5] p-2 h-[42px] w-full' required />
            </div>
          </div>

          <button type='submit' className={`add-btn max-w-[200px] border-none p-2 mt-2 bg-black text-white cursor-pointer ${!isFormComplete ? 'bg-gray-700 cursor-not-allowed' : ''}`} disabled={!isFormComplete}>
            ADD
          </button>

        </form>
      </div>
    </div>
  );
};

export default Add;
