import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'

const StaffTable = ({setShowInfo, showInfo}) => {
    const handleShowInfo = () => setShowInfo(!showInfo)
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
                            <tr>
                                <td colSpan={9}>
                                    <TableLoader count="20" cols="4"/>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={9}>
                                    <NoData/>
                                </td>
                            </tr>
                            <tr onDoubleClick={handleShowInfo}>
                                <td>1</td>
                                <td>Robert Fox</td>
                                <td>Science 4</td>
                                <td>7</td>
                                <td>Male</td>
                                <td>Robert.fox@Gmail.com</td>
                                <td className='table-action'>
                                    <ul>
                                        <li><button className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                        <li><button className="tooltip" data-tooltip="Archive"><PiArchive/></button></li>
                                        <li><button className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                                        <li><button className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
  )
}

export default StaffTable
