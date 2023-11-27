import React from 'react'

function Product({title,price}) {
  return (
    <article>
    <h3>{title}</h3>
    <p>Price:{price}€</p>
    <img src="https://qmode.es/wp-content/uploads/2016/12/6a668901063c7ef50b4fc1e48a3b6b88-255x300.jpg" alt="" />
  </article>
  )
}

export default Product