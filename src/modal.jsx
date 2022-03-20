import React from 'react';
import './modal.css';
import Products from './products';
import { useState } from 'react';


export default function Modal({active, setActive, cart, setCart}) {
    const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className={active ? "modal_body active" : "modal_body"} onClick={() => setActive(false)}>
        <div className='modal' onClick={e => e.stopPropagation()}>
            <div className='cart_name'>
                <h1>Cart</h1>
            </div>
            {cart.map((elem) => <Products elem={elem} key={elem.id} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
            <div className='total_div'><h1>Total : {totalPrice}</h1></div>
        </div>
    </div>
  )
}
