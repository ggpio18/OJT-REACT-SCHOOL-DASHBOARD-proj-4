import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { CiSearch } from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'

import TeacherTable from './TeacherTable'
import Databaseinformation from '../Databaseinformation'
import useQueryData from '../../../../custom-hook/useQueryData'
import Databaseinformationteacher from './Databaseinformationteacher'



const Teacher = () => {
    const [showInfo, setShowInfo] = React.useState(false);
    const [teacherInfo, setTeacherInfo] = React.useState('')

    const {
        isLoading,
        isFetching,
        error,
        data: teacher,
      } = useQueryData(
        "/v1/teacher", // endpoint
        "get", // method
        "teacher" // key
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
                    <h1>Teacher Database</h1>
                    <form action="" className='relative'>
                        <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20'/>
                        <CiSearch className='absolute top-1 left-2 z-20 text-white text-2xl opacity-20 text-2xl'/>
                    </form>
                </div>
            

                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                    <ul className='flex space-x-10'>
                        <li className='tab-link'><Link to="/database/student">Student</Link></li>
                        <li className='tab-link active'><Link to="/database/teacher">Teacher</Link></li>
                        <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                    </ul>
                    <button className='btn btn--accent'>
                        <FiPlus/> New
                    </button>
                </div>

                <TeacherTable showInfo={showInfo} setShowInfo={setShowInfo} isLoading={isLoading} teacher={teacher} teacherInfo
                setTeacherInfo={setTeacherInfo}/>

            </div>
             <Databaseinformationteacher showInfo={showInfo} teacherInfo={teacherInfo} setShowInfo={setShowInfo}/>
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

export default Teacher
