import React from 'react'
import { LiaEnvelope, LiaKeySolid } from 'react-icons/lia'

const Databaseinformation = ({showInfo}) => {
  return (
    <div className={`information absolute transition-all border-l border-line h-[calc(100vh-65px)] overflow-hidden w-1/4 ${showInfo ? "right-0" : "-right-1/4"}`}>
                <div className='p-10'>
                <div className="text-center mb-8">
                    <img src="https://via.placeholder.com/100x100" alt="" className='rounded-full size-[100px] mx-auto object-fit mb-4'/>
                    <h3 className='mb-1'>Robert Fox</h3>
                    <small className='opacity-60'>Science 7 Student</small>
                    <ul className='flex gap-5 mt-5 justify-center'>
                        <li><button className='tooltip text-2xl' data-tooltip="Account"><LiaKeySolid/></button></li>
                        <li><button className='tooltip text-2xl' data-tooltip="Email"><LiaEnvelope/></button></li>
                    </ul>
                </div>

                <h4 className='mb-3'>About</h4>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis amet ducimus neque consectetur. Repudiandae, quasi?</p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className='info-box'>
                        <h4>Age</h4>
                        <p className='text-xs'>7</p>
                    </div>

                    <div className='info-box'>
                        <h4>Gender</h4>
                        <p className='text-xs'>Male</p>
                    </div>

                    <div className='info-box'>
                        <h4>Birthday</h4>
                        <p className='text-xs'>Jan 1 2000</p>
                    </div>

                    <div className='info-box'>
                        <h4>Address</h4>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>

                </div>
            </div>
            </div>
  )
}

export default Databaseinformation
