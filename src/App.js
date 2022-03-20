import { useEffect, useState } from 'react';
import './App.css';
import cartImage from './icons/cart-plus-solid.svg';
import Carts from './cart';
import Modal from './modal';

const PAGE_CART = 'cart';

function App() {

  const [date, setDate] = useState([]);
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState([]);

  console.log(date)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
      
      return res.json();
    }) 
    .then((data) => {
      setDate(data);
    })
  }, [])

  return (
    <div className="App">
      <Modal setActive={setActive} active={active} setCart={setCart} cart={cart}/>
      <header className='app_header'>
        <h1>STORE</h1>
        <img onClick={() => {
          setActive(true)
        }} src={cartImage}></img>
      </header>

      <div className='app_main'>
        {date.map((elem) => <Carts key={elem.id} elem={elem} setCart={setCart} />)}
      </div>
    </div>
  );
}

export default App;
