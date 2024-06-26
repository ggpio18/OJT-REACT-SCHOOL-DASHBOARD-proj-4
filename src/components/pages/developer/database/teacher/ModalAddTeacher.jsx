import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const ModalAddTeacher = () => {
    const initVal ={
        teacher_name: "",
        teacher_class: "",
        teacher_age: "",
    }

    const yupSchema = Yup.object({
        teacher_name: Yup.string().required("Required g"),
        teacher_class: Yup.string().required("Required g"),
        teacher_age: Yup.number().required("Required g"),
    })

  return (
    <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Student</h2>
                    <button className='absolute top-[25px] right-4'><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values) => {
                        console.log(values)
                    }}
                    >
                         {(props) => {
                            return (
                    <Form action="" className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                        <div className="input-wrap">
                             <InputText
                                label="Name"
                                type="text"
                                name="teacher_name"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Class"
                                type="text"
                                name="teacher_class"
                            />
                        </div>

                        {/* <div className="input-wrap">
                            <label htmlFor="">Gender</label>
                            <select>
                                <option value="Male" className='text-stone-900'>Male</option>
                                <option value="Feale" className='text-stone-900'>Female</option>
                            </select>
                            <small className='error-msg'>Required*</small>
                        </div> */}

                        <div className="input-wrap">
                        <InputText
                                label="Age"
                                type="number"
                                name="teacher_age"
                            />
                        </div>

                        </div>

                        <div className='form-action'>
                            <button className='btn btn-form btn--accent'>Add<SpinnerButton/></button>
                            <button className='btn btn-form btn--cancel'>Cancel</button>
                        </div>
                    </Form>)}}
                    </Formik>
                </div>
        </div>
    </ModalWrapper>

  )
}

export default ModalAddTeacher
