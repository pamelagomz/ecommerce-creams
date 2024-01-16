import React from 'react'
import './../BarNotice/barnotice.css'

const  BarNotice = ( {children} ) => {

    //console.log(cuotas)
    console.log(children)

  return (
    <section className="bar-notice">
    <div className="container">
        {children} 

    </div>
    </section>
  )
}

export default BarNotice