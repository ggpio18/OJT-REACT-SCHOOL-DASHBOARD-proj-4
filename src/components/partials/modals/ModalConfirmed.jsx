import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid, LiaTrashAltSolid } from 'react-icons/lia'
import { BiErrorCircle } from 'react-icons/bi'
import { PiArchive } from "react-icons/pi";


const ModalConfirmed = ({position}) => {
  return (
    <ModalWrapper position={position}>
    <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-warning text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Modal Confirmed</h4>
            <button><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md  bg-secondary">
            <div className='flex gap-4 items-center '>
                <PiArchive className='text-4xl text-warning mb-3'/>
                <div>
                    <h2 className='mb-2'>Archiving Record</h2>
                    <p className='mb-5'>Are you sure you want to archive this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn--warning btn-form w-1/4'>Confirm</button>
                <button className='btn btn--cancel btn-form w-1/4'>Cancel</button>
              </div>
          </div>
        </div>
</ModalWrapper>
  )
}

export default ModalConfirmed
