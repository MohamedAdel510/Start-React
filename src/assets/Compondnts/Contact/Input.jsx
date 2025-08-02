import React, {useState} from 'react'

export default function Input( props  ) {
 
  const {label} = props;

  const [float, setfloat] = useState(false) ;   // down
  
  return (
    <>
        <label htmlFor= {label} className={'fs-6 text-success   ' + (float ? ' floating-up' : ' floating-down' )}> {label} </label>
        <input   onChange={    ( e ) => {  e.target.value != "" ?  setfloat(true) : setfloat(false)  }  } id={label} type="text" className='form-control my-2  border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched ' placeholder={label} />
    </>
  )
}
