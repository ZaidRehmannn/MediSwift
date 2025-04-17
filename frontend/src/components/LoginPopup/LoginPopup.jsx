import React, { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setshowLogin }) => {
    const { url, settoken } = useContext(StoreContext);
    const [currState, setcurrState] = useState("Sign Up");
    const [data, setdata] = useState({
        firstName: "",
        lastName: "",
        loginIdentifier: "",
        password: "",
        phoneNo: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(data => ({ ...data, [name]: value }));
    };

    const onlogin = async (event) => {
        event.preventDefault();

        let newUrl = url;
        if (currState === 'Sign Up') {
            newUrl += '/api/user/register'
        }
        else {
            newUrl += '/api/user/login'
        }

        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            settoken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setshowLogin(false);
        }
        else {
            alert(response.data.message);
        }
    };

    return (
        <div className='login-popup absolute z-[1] w-full h-full bg-[#00000090] grid'>
            <form className='login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-sm animate-fadeIn0.5s' onSubmit={onlogin}>
                <div className='login-popup-title flex justify-between items-center text-black text-xl font-semibold'>
                    <h2>{currState}</h2>
                    <img className='w-4 cursor-pointer' onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs flex flex-col gap-4'>
                    {currState === 'Sign Up'
                        ? <>
                            <div className='flex gap-x-2'>
                                <input className='w-1/2 outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='firstName' value={data.firstName} onChange={onChangeHandler} type='text' placeholder='First Name' required />
                                <input className='w-1/2 outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='lastName' value={data.lastName} onChange={onChangeHandler} type='text' placeholder='Last Name' required />
                            </div>
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='username' value={data.username} onChange={onChangeHandler} type='text' placeholder='Username' required />
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='email' value={data.email} onChange={onChangeHandler} type="email" placeholder='Email' required />
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Password' required />
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='phoneNo' value={data.phoneNo} onChange={onChangeHandler} type="text" placeholder='Phone Number' required />
                            <div className='login-popup-condition flex items-start gap-2'>
                                <input className='mt-1' type="checkbox" required />
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                            </div>
                        </>
                        : <>
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='loginIdentifier' value={data.loginIdentifier} onChange={onChangeHandler} type="text" placeholder='Email or Username' required />
                            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] p-2' name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Password' required />
                        </>
                    }
                </div>
                <button type='submit' className='border-none p-[10px] rounded-[4px] text-white bg-[#FF6347] text-sm cursor-pointer'>{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                {currState === 'Sign Up'
                    ? <p>Already have an account? <span className='text-[#FF6347] font-semibold cursor-pointer' onClick={() => setcurrState('Login')}>Login here</span></p>
                    : <p>Create a new account? <span className='text-[#FF6347] font-semibold cursor-pointer' onClick={() => setcurrState('Sign Up')}>Click here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
