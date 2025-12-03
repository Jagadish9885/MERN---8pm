import React from 'react'

function Course(props) {
  return (
    <div className='d-flex flex-column border border-2 border-warning p-2 m-5 rounded shadow text-center'
     style={{width:"350px", height:"250px"}}>
      <h4>{props.children}</h4>
      <b>Price: {props.price}</b>
      <b> Trainer: <i>{props.trainer}</i></b>
      <h3>{props.duration}</h3>
      <p>{props.desc}</p>
      
    </div>
  )
}


export default Course
