import  { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
      calculateTotal();
    }
  }, []);

  const calculateTotal = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.productprice;
    });
    setTotal(totalAmount);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.ProductId !== productId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    calculateTotal();
  };

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.ProductId}>
            <img src={item.productimage} alt={item.productname} />
            <h2>{item.productname}</h2>
            <p>Price: ₹{item.productprice}</p>
            <p>Count Type: {item.counttype}</p>
            <p>Discount: {item.discountprecent}%</p>
            <button onClick={() => removeFromCart(item.ProductId)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>
    </div>
  );
};

export default Cart;