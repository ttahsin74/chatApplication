import React from 'react'

const Input = ({type,labelName,value, ...perameter}) => {
  return (
    <div className='relative mt-[40px]'>
        <label className='text-[13px] text-[#11175D] font-semibold absolute bg-[#fff] px-[20px] top-[-10px] left-[35px]'>{labelName}</label>
        <input value={value} type={type} className=' rounded-[10px] border-2 border-[#11175D] w-[360px] px-[10px] py-[10px] ' {...perameter}/>
    </div>
  )
}

export default Input