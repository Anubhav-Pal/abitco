import React from 'react'

const Footer = () => {
  return (
    <div >
      <hr />
      <div className='flex flex-col sm:flex-row gap-10 items-start sm:items-center justify-between px-20 sm:px-[136px] my-[125px]'  >
        {/* <hr /> */}
        <div>
          <div className='text-[40px] font-bold'>aBit</div>
          <div className='text-lg leading-5 opacity-85 font-serif capitalize'>Changing the way in which Creators and fans interact.</div>
        </div>
        <div className='flex flex-col font-bold text-xs cursor-pointer gap-[18px] border-l-[1px] pl-6'>
          <div>Home</div>
          <div>Are you a Creator?</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  )
}

export default Footer