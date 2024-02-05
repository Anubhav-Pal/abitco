import Image from 'next/image'
import React from 'react'
import band from '../public/assets/band.svg'
import dan from '../public/assets/dan.svg'
import videocard from '../public/assets/videocard.svg'
import { FaPlus } from "react-icons/fa6";


const CreatorSection = () => {
  const stats = [
    {
      number: 1,
      title: "Shared Videos",
    },
    {
      number: "$9510",
      title: "Funds Raised",
    },
    {
      number: 317,
      title: "Co-owner community",
    },
    {
      number: "$3804",
      title: "Co-owner Earnings",
    },
  ]

  const videostats = [
    {
      title: "Shares",
      number: 317
    },
    {
      title: "Offered",
      number: "75%"
    },
    {
      title: "Raised",
      number: "$9510"
    },
  ]
  return (

    <div className='relative top-3 sm:-top-40 z-10  px-[50px] sm:px-[96px] flex flex-col gap-20 mb-[100px]'>
      <div className='sm:w-1/2 flex flex-col sm:flex-row rounded-3xl shadow-2xl flex-1'>
        <div className='w-full min-w-36 sm:w-1/2'>

          <Image src={dan} className='object-cover rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none w-full h-full' />
        </div>

        <div className='creator-card flex flex-col justify-between p-8 gap-5 rounded-b-3xl sm:rounded-r-3xl sm:rounded-bl-none w-full'>
          <div className='flex items-center justify-between'>
            <div className='font-bold text-2xl'>DAN MACE</div>
            <div className='font-normal text-xs text-[#696969]'>/Johny_Films/</div>
          </div>

          <div className='text-sm text-[#696969] flex flex-col gap-2'>
            <div className='font-bold'>Bio</div>
            <div className='text-xs'>
              Simply a film fan creating original content for YouTube. Let’s Collaborate.
            </div>
          </div>
          <div className='rounded-[4px]  flex text-sm bg-bla'>
            <div className='w-1/2 cursor-pointer flex items-center justify-center rounded-[4px] bg-transparent text-[#313131] border-black font-serif border-[1px]'>Creator</div>
            <div className='w-1/2 flex items-center opacity-65 bg-black justify-center rounded-r-[4px] font-serif'>Creator</div>
          </div>
        </div>
      </div>


      <div className='creator-information flex flex-col md:flex-row gap-5 justify-between'>
        <div className='flex flex-col gap-4 font-serif'>
          <div className='text-[28px]'>Releases</div>
          <div className='text-base text-[#565656]'>Videos that you upload in collaboration with aBit appear here.</div>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap gap-10 sm:items-center w-2/5 justify-between'>
          {stats.map((stat) => {
            return (
              <div className='border-l-[1px] flex flex-col gap-3 pl-3'>
                <div className='font-bold text-sm text-[#565656]'>{stat.number}</div>
                <div className='font-light text-xs text-[#696969]'>{stat.title}</div>
              </div>
            )
          })}
        </div>
      </div>


      <div className='video-cards flex flex-col sm:flex-row items-center gap-11'>
        <div className='flex flex-col bg-[#EDEDED] rounded-3xl p-8 items-center justify-end w-[283.64px] h-[312px]'>
          <div className='text-[#959595] text-4xl opacity-50 font-extrabold mb-20'><FaPlus /></div>
          <div className='text-center font-normal text-xs text-[#A0A0A0]'>You haven’t uploaded any videos with aBit yet. Add now!</div>
        </div>
        <div className='video-card flex flex-col bg-[#EDEDED] rounded-3xl p-4  items-center justify-between w-[283.64px] h-[312px]  shadow-2xl'>
          <div className='text-white text-xl font-bold'>The Sound of Silence </div>
          <div className='flex justify-between font-normal text-white w-full rounded-xl px-4 py-2 backdrop-blur-2xl backdrop-filter bg-white bg-opacity-30'>

            {videostats.map(stat => (
              <div className='flex flex-col gap-[1px] text-center'>
                <div className='text-xs'>{stat.title}</div>
                <div className='text-sm font-bold'>{stat.number}</div>
              </div>
            ))
            }

          </div>
        </div>
      </div>
    </div>


  )
}

export default CreatorSection