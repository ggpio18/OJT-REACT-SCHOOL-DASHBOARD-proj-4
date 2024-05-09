import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirmed from '../../../../partials/modals/ModalConfirmed'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete, setIsShow } from '../../../../../store/StoreAction'

const StudentTable = ({showInfo, student, isLoading, setItemEdit, setIsSuccess, setMessage, setStudentInfo}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
  
    const [id, setId] = React.useState('')
    
    const handleShowInfo = (item) => {
        setStudentInfo(item)
        dispatch(setIsShow(true))
    }
    
    let counter = 1;

    const handleEdit = (item) => {
        dispatch(setIsAdd(true));
        setItemEdit(item);
    }

    const handleActive = (item) => {
        dispatch(setIsActive(true));
        setId(item.student_aid);
        setIsArchiving(0);
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.student_aid);
        setIsArchiving(1);
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true));
        setId(item.student_aid);
    }


  return (
    <>
    {/* edit */}
    <div className="table-wrapper relative overflow-y-scroll h-[600px]">
        {/* <SpinnerFetching/> */}
                    <table>
                        <thead className='sticky top-0 relative z-10 bg-primary'>
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

                {student?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}
             
                {student?.data.map((item, key) => (
                        <tr onDoubleClick={() => handleShowInfo(item)} key={key}>
                            <td>{counter++}</td>
                            <td>{item.student_name}</td>
                            <td>{item.student_class}</td>
                            <td>{item.student_age}</td>
                            <td>{item.student_gender}</td>
                            <td>{item.student_email}</td>
                            <td className='table-action'>
                            <ul>
                                {item.student_is_active ? (
                                    <>
                                        <li><button className="tooltip" data-tooltip="Edit" onClick={()=>handleEdit(item)}><LiaEdit/></button></li>
                                        <li><button className="tooltip" data-tooltip="Archive" onClick={()=>handleActive(item)}><PiArchive /></button></li>
                                    </>
                                ) : (
                                    <>
                                    <li><button className="tooltip" data-tooltip="Restore" onClick={()=>handleRestore(item)}><LiaHistorySolid/></button></li>
                                    <li><button className="tooltip" data-tooltip="Delete" onClick={()=>handleDelete(item)}><LiaTrashAltSolid/></button></li></>
                                )}
                            </ul>
                            </td>
                        </tr>
                    ))              
                }

                        </tbody>
                    </table>
                </div>
                
                {store.isActive && <ModalConfirmed position="center" setIsSuccess={setIsSuccess} setMessage={setMessage} queryKey="student" endpoint={`/v1/student/active/${id}`} isArchiving={isArchiving}/>}

                {store.isDelete && <ModalDelete position="center" setIsSuccess={setIsSuccess} setMessage={setMessage} queryKey="student" endpoint={`/v1/student/${id}`} />}
                </>
  )
}

export default StudentTable
