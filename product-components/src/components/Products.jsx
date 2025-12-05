import React from 'react'


function Products(prop) {
  return (
    <div className='position-relative border border-2 border-info m-3 p-2 shadow rounded overflow-hidden' 
    style={{backgroundImage: `url(${prop.pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            width: "300px",
            height: "300px"}}>
      <div style={{position:'absolute', inset:0,
                backgroundColor: "rgba(0,0,0,0.4)"
                }}>
      </div>


        <span className='position-absolute top-0 end-0 m-2 badge bg-primary'>{prop.rating}</span>

        <div className='position-relative text-white p-2'>
        <h1>{prop.children}</h1>        
        <p>{prop.desc}</p>
       
        
        <b>{prop.category}</b>
        
        <button type='button' className='btn btn-outline-danger'>Add To Cart</button>
    </div>
    </div>
  )
}

export default Products


