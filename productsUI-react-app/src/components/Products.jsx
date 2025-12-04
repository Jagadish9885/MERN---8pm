import React from 'react'

function Products(prop) {
  return (
    <div>
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
        <image src={prop.pic}></image>
      </div>
    </div>
  )
}

export default Products


