import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Card,CardContent,Typography,CardHeader,CardActionArea,CardMedia,CardActions,Button, Container} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import './productCard.css'
import { useStateValue } from '../context';
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    maxHeight: 500,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
    Width: 100
   
    },
    btn:{
        
        backgroundColor: 'rgb(243,168,71)',
        color: 'white',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
    },
    act:{
        justifyContent: 'center',
    }
  });
  
export default function ProductCard({title,img,price,category,rating,quantity}) {
    const classes = useStyles();
    const [{cart},dispatch]=useStateValue();
    const addToCart=()=>{
        dispatch({
          type: "ADD_TO_CART",
          item:{
            category: category,
            title: title,
            image: img,
            price: price,
            rating: rating,
            quantity: quantity
          }
        })
    }
    return (
               <React.Fragment>
                  <div style={{ zIndex:"1"}}>
                  <Card className={classes.root} >
                        <CardActionArea>
                            
                            <div className="card_div">
                                <img className="card_img" src={img} ></img>
                            </div>
                            <CardContent>
                            <Typography  >
                               {title.length > 30 ? title.substring(0, 29) + "..." : title}
                            </Typography>
                            <Typography variant="body2" className="card_text" component="p">
                              Rs.{price}
                            </Typography>
                            <div className="star">{
                              Array(rating)
                              .fill().map((_)=>(
                                  <p>⭐</p>
                              ))
                            }
                            </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.act}>
                            {/* <Button size="small" color="primary">
                            Add to cart
                            </Button> */}
                           
                              <Button
                                    variant="contained"
                                    onClick={addToCart}
                                    size="small"
                                    className={classes.btn}
                                    startIcon={<AddShoppingCartIcon />}
                                >
                                    Add to Cart
                            </Button>    
                            
                        </CardActions>
                        </Card>
                        </div>
                  </React.Fragment>
    )
}