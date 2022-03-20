import React, { useState } from 'react';
import './products.css';

export default function Products({elem, removeFromCart, cart,setCart, setTotalPrice, totalPrice}) {
    function removeFromCart(){
        let filtered =  cart.filter((item) => item.id !== elem.id)
        setCart(filtered)
    }
    
    const [count, setCount] = useState(0)
  return (
    <div className='cart_item'>
        <img src={elem.image} alt="img" />
        <h3>{elem.title}</h3>
        <h4>{elem.price}</h4>
        <div className='quantity'>
        <button onClick={() => {
            if(count !== 0){
                setCount(count -1)
                setTotalPrice(prev => prev - elem.price)
            }
        }}>-</button>
        <p>{count}</p>
        <button onClick={() => {
            setCount(count +1)
            setTotalPrice(prev => prev + elem.price)
        }}>+</button>
        </div>
        <button onClick={() => removeFromCart()}>
              Remove
        </button>
        
    </div>
  )
}

   

  
 
