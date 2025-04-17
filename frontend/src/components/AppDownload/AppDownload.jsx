import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download m-auto mt-24 text-[max(3vw,20px)] text-center font-medium' id='app-download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className='app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-10'>
                <img className='w-[max(30vw,120px)] max-w-44 transition duration-500 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
                <img className='w-[max(30vw,120px)] max-w-44 transition duration-500 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
