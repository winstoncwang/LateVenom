import React from 'react'

const InputError = ({error})=>{
    console.log("test: ",error.length)
    return (
        <div className={`ui pointing red basic label ${error.length===0? "hidden":"" } `}>
              {`${error}`}
        </div>
    )
}

export default InputError;