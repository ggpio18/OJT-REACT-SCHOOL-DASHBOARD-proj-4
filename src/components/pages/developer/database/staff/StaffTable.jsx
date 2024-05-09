import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'

const StaffTable = ({setShowInfo, showInfo, staff, isLoading, setSaffInfo}) => {


    const handleShowInfo = (item) => {
        setSaffInfo(item)
        setShowInfo(true)
    }
    let counter = 1;

  return (
    <div className="table-wrapper relative">
        {/* <SpinnerFetching/> */}
                    <table>
                        <thead>
                            <tr>
                                <th className='w-[20px]'>#</th>
                                <th className='w-[150px]'>Name</th>
                                <th className='w-[80px]'>Class</th>
                                <th className='w-[80px]'>Age</th>
                                <th className='w-[80px]'>Gender</th>
                                <th className='w-[80px]'>Email</th>
                                <th className='w-[100px]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {isLoading && ( 
                <tr>
                    <td colSpan={9}>
                        <TableLoader count="20" cols="4"/>
                    </td>
                </tr>)
                }

                {staff?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}

                {staff?.data.map((item, key) => (
                            <tr onDoubleClick={() => handleShowInfo(item)} key={key}>
                                <td>{counter++}</td>
                                <td>{item.staff_name}</td>
                                <td>{item.staff_class}</td>
                                <td>{item.staff_age}</td>
                                <td>{item.staff_gender}</td>
                                <td>{item.staff_email}</td>
                                <td className='table-action'>

                                    <ul>
                                        {item.student_is_active ? (
                                    <>
                                        <li><button className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                        <li><button className="tooltip" data-tooltip="Archive"><PiArchive /></button></li>
                                    </>
                                ) : (
                                    <>
                                    <li><button className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                                    <li><button className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li></>
                                )}
                                    </ul>
                                </td>
                            </tr>
                            ))              
                        }   

                        </tbody>
                    </table>
                </div>
  )
}

export default StaffTable
