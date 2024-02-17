import React from 'react'
import '../assets/styles/Cart.css'
function Cart() {
  return (
    <div className='cart_page'>
    <div className='cart_sub-container'>
    <div className='left-container'>
    <div className='spacer'></div>
      <h1 className='cartHeader'>My Cart</h1>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div>
      <div className='cards'>Item1</div><div className='cards'>Item1</div>
      <div className='cards'>Item1</div><div className='cards'>Item1</div><div className='cards'>Item1</div><div className='cards'>Item1</div>
    </div>
    <div className='right-container'>
    <div className='spacer'></div>
    <div className='right-sub-container'>Right</div></div>
    </div>
    </div>
  )
}

export default Cart