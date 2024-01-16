import React, { useRef } from 'react'

 const PruebaRef = () => {

    const inputRef = useRef(null); 

    console.log(inputRef);

  return (
    <div>
        <input ref={inputRef} type='text'/>
        <button> focus </button>

    </div>
  )
}

export default PruebaRef