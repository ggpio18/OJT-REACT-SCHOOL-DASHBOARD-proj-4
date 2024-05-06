import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { CiSearch } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'

import Databaseinformation from '../Databaseinformation'

import StaffTable from './StaffTable'
import useQueryData from '../../../../custom-hook/useQueryData'


const Staff = () => {
    const [showInfo, setShowInfo] = React.useState(false);
    const {
        isLoading,
        isFetching,
        error,
        data: staff,
      } = useQueryData(
        "/v1/staff", // endpoint
        "get", // method
        "staff" // key
      );


  return (
    <>
    <section className='flex overflow-x-hidden'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

        <div className='flex relative'>
            <div className={`main-wrapper transition-all px-4 py-3 ${showInfo ? "w-3/4" : "w-full"}`}>
                <div className='flex justify-between items-center'>
                    <h1>Staff Database</h1>
                    <form action="" className='relative'>
                        <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20'/>
                        <CiSearch className='absolute top-1 left-2 z-20 text-white text-2xl opacity-20 text-2xl'/>
                    </form>
                </div>
            

                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                    <ul className='flex space-x-10'>
                        <li className='tab-link'><Link to="/database/student">Student</Link></li>
                        <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                        <li className='tab-link active'><Link to="/database/staff">Staff</Link></li>
                    </ul>
                    <button className='btn btn--accent'>
                        <FiPlus/> New
                    </button>
                </div>

                <StaffTable showInfo={showInfo} setShowInfo={setShowInfo} isLoading={isLoading} staff={staff}/>

            </div>
             <Databaseinformation showInfo={showInfo}/>
        </div>

        </main>
    </section>
    {/* <ModalAddStudent/> */}
    {/* <ModalError position="center"/> */}
    {/* <ModalValidate position="center"/> */}
    {/* <ModalConfirmed position="center"/> */}
    {/* <ModalDelete position="center"/> */}
    {/* <SpinnerWindow/> */}
    </>

  )
}

export default Staff

