import { useField } from "formik"

export const InputText = ({label, ...props}) => {

    const [field, meta] = useField(props)

    return(
        <>
            <label htmlFor={props.id || props.name}
            className={meta.touched && meta.error ? "error-msg" : ""}
            >{label}</label>

             <input 
                {...field}
                {...props}
                className={meta.touched && meta.error ? "error-msg" : ""}
                autoComplete="off"
             />
             {meta.touched && meta.error ? (<small 
             className='error-msg'>{meta.error}</small>) : null}
        </>
    )
}
