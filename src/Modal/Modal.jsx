import React from 'react'
import tick from "../assets/images/tick.png"

const Modal = ({mod,hide}) => {

  let handleclose = () => {
    hide(false)
  }

  return (
    <>
    { mod && 
     <div className='fixed w-full h-full bg-[rgba(161,218,233,0.69)] z-50 flex items-center justify-center'>
        <div className=' bg-white p-7 w-[300px] h-[400px] rounded-[10px] flex flex-col justify-center items-center'>
          <div className='w-[230px] h-[230px]'>
            <img className=' object-cover w-full h-full' src={tick} alt="" />
          </div>
          <h2 className=' text-center text-[20px]'>Form submitted sucessfully!</h2>
          <div className='flex justify-center mt-[15px]'>
            <button onClick={handleclose} className=' py-[8px] px-[20px] rounded-lg bg-[#58D68D] text-white text-[18px]'>Close</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Modal