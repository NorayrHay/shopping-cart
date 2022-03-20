import './cart.css';

export default function Carts ({elem, setCart}) {

    // const addToCart = (product) => {
    //     let newCart = [...cart];
    //     let itemInCart = newCart.find(
    //       (item) => product.name === item.name
    //     );
    //     if (itemInCart) {
    //       itemInCart.quantity++;
    //     } else {
    //       itemInCart = {
    //         ...product,
    //         quantity: 1,
    //       };
    //       newCart.push(itemInCart);
    //     }
    //     setCart(newCart);
    //   };

    return (
            <div className='item_cart'>
                <img src={elem.image} />
               
                <button onClick={() => {
                    setCart(prev => {
                        return [
                            ...prev,
                            {
                                id: elem.id,
                                image: elem.image,
                                title: elem.title,
                                price: elem.price,
                            }
                        ]})
                }}>Add</button>
            </div>
    )
}