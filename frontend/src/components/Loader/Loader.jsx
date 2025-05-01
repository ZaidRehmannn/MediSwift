import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center items-baseline w-full h-[200px] py-4' >
        <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Loader