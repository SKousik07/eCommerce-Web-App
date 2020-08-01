import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles'
import {Grid} from '@material-ui/core/'
import Sidenav from './Sidenav';
import { useStateValue } from '../context';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
       
        
    }
}))

function Product() {

    let { name } = useParams( );
    const classes = useStyles();
    const [filterValue, setfilterValue] = useState('');
    const [dataList, setData] = useState([]);
    const [{cart,fdata},dispatch] = useStateValue();
    useEffect(() => {
        // console.log("useeffect",dataList)
        if(filterValue==='highest to lowest'){
        const sorted=[...fdata].sort((a,b)=> b['price']-a['price'] );
        setData(sorted)

        }
        else if(filterValue==='lowest to highest') {
        const sorted=[...fdata].sort((a,b)=> a['price']-b['price'] );
        setData(sorted)
        }
        else{
            setData([...fdata])
        }
       
       
    }, [filterValue])
    


  const handleChange = (event) => {
    setfilterValue(event.target.value);
  };
    
    return (
       <div className="product_layout">
        <div className="product_sidenav">
       
          <Sidenav  filterValue={filterValue} handleChange={handleChange}/>
        </div>
        <div className="product_main">
            <h1>{name}</h1>
            <div>Now showing post {name}</div>
            <div className={classes.root}>
             <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {
                   
                    dataList.filter((dt)=> dt.category===name).map((l)=>{
                        
                        return (
                        <Grid item  md={4} key={l.title}>
                        <ProductCard title={l.title} img={l.image} price={l.price} category={l.category} rating={l.rating} quantity={l.quantity} />
                        </Grid>
                        )
                    })

                }
            </Grid>    
            </div>
        </div>
        
             

        </div> 
        
    )
}

export default Product





