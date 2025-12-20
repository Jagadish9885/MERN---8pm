import React from 'react'

function Products(prop) {
  return (
    <div>
      <h1>products</h1>
      <div>
        <h1>{prop.children}</h1>
      </div>
      <div>
        <p>{prop.desc}</p>
      </div>
      <div>
        <b>{prop.category}</b>
        <i>{prop.rating}</i>
      </div>
      <div>
        <img src={prop.pic} alt='bomma' style={{width: '200px', height: '200px'}}></img>
      </div>
    </div>
  )
}

export default Products


