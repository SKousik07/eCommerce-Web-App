import React, { useState,useEffect } from 'react'
import './home.css'
import { data } from "../assets/data";
import ProductCard from './ProductCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../context';

function Home() {
    
    const [{fdata},dispatch]=useStateValue();
    
    return (
        <React.Fragment>
        <div>
            <img className="home_img" 
src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/Herotator/1218154_1500x600_2._CB430975671_.jpg"></img>
        </div>
        <h2 style={{ zIndex:"1"}}>Mobiles</h2>
        <div className="home_row1">
              
              {
                   
                   fdata.filter((dt)=> dt.category==="mobiles").slice(0,4).map((l)=>{
                       
                       return <ProductCard key={l.title} id={l.id} title={l.title} img={l.image} price={l.price} rating={l.rating} quantity={l.quantity} />
                   })

               }
               <Link to="product/mobiles">
               <IconButton aria-label="delete">
               <ArrowForwardIosIcon  />
               </IconButton>
                
                
               
               </Link>
        </div>
        <div >
            <img className="home_ad1" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"></img>
        </div>
        <h2>Shoes</h2>
        <div className="home_row1">
              
              {
                  
                   fdata.filter((dt)=> dt.category==="shoes").slice(0,4).map((l)=>{
                      
                       return <ProductCard key={l.title} id={l.id} title={l.title} img={l.image} price={l.price} rating={l.rating} quantity={l.quantity} />
                   })

               }
            <Link to="product/shoes">
            <IconButton aria-label="delete">
               <ArrowForwardIosIcon  />
               </IconButton>
             </Link>
        </div>
        
        </React.Fragment>
    )
}

export default Home
