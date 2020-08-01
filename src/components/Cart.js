import React from 'react';
import empty from '../assets/empty.png'
import {Grid, Card,CardContent,Typography,CardHeader,CardActionArea,CardMedia,CardActions,Button, Container} from '@material-ui/core/'
import { useStateValue } from '../context';
import CartCards from './CartCards';
import './cart.css'
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
function Cart() {
  const [{cart},dispatch]=useStateValue()


 
  return (
   
    <div>
    
    {cart.length ==0 ? 
    <div>
      <h1>Cart is Empty</h1>
      <img className="cart_empty" src={empty}></img>
      <h4>Looks like you have no items in your shopping cart</h4>
      <p><Link to="/">Click here</Link> to continue shopping</p>
       

    </div>
    :
    <div className="cart_layout">
    <div className="card_list">
      <h2>My Cart</h2>
     {
        cart.map((item)=>(
          <CartCards key={item.title} title={item.title} category={item.category} price={item.price} image={item.image} rating={item.rating} quantity={item.quantity}/>
        ))
     }
     <p><Link to="/">Click here</Link> to continue shopping</p>
    </div>
    <div className="card_checkout">
        <Subtotal/>
     </div>
    </div>
    }

     </div>
  );
}

export default Cart;
