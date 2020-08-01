import React from 'react';

import {Grid, Card,CardContent,Typography,CardHeader,CardActionArea,CardMedia,CardActions,Button, Container} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import './cartCards.css';
import { useStateValue } from '../context';
function CartCards({title,price,image,quantity,category,rating}) {
  
  const [{cart},dispatch]=useStateValue()
  const removeFromCart=()=>{
     dispatch({
       type: "REMOVE_FROM_CART",
       item:{
          title: title,
          quantity: quantity
       }
     })
  }
  const removeEntireFromCart=()=>{
    dispatch({
      type: "REMOVE_ENTIRE_FROM_CART",
      item:{
         title: title,
         quantity: quantity
      }
    })
 }

  const addToCart=()=>{
    dispatch({
      type: "ADD_TO_CART",
      item:{
        category,category,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity
      }
    })
}


  return (
    
    <Card>
    <div className="cart_card">
        
        <div className="card_imgdiv" >
            <img className="card_img" src={image}></img>
        </div>
        <div className="card_content">
            <h5>{title}</h5>
            <p>Rs.{price}</p>
            <div className="card_btn">
                 <div className="card_sym"> 
                 {quantity >1 ?
                    <RemoveCircleIcon onClick={removeFromCart} color="secondary"></RemoveCircleIcon>
                    :
                    <RemoveCircleIcon color="disabled"></RemoveCircleIcon>
                 }
                   <p className="card_q">Quantity: {quantity}</p>
                    
                    <AddCircleIcon onClick={addToCart} color="primary"></AddCircleIcon>
                </div>
                <div className="card_remove">
                    <Button  variant="contained" color="secondary" onClick={removeEntireFromCart} size="small" startIcon={<RemoveShoppingCartIcon/>}>
                        remove
                    </Button>
                </div>
            </div>
        </div>
        
    </div>
    </Card>
    
  );
}

export default CartCards; 
