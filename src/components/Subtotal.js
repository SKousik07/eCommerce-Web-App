import React, { useState } from 'react'
import { useStateValue } from '../context'
import CurrencyFormat from 'react-currency-format';
import './subtotal.css'
import PaypalBtn from './PaypalBtn';


function Subtotal() {
    
    // const [total, setTotal] = useState(0);

    const [{cart}]= useStateValue();
    const getCartTotal=(cart)=>{
        let a=cart?.reduce((amt,item)=> ((item.price*item.quantity)+amt),0)
        // setTotal(a)
        return a
    }

    const getItemCount=(cart)=>{
        let a=cart?.reduce((len,item)=> item.quantity+len ,0)
        console.log(a)
        return a
       }
    return (
        <div className="sub_card">
            <CurrencyFormat 
            value={getCartTotal(cart)} 
            displayType={'text'} 
            // thousandSeparator={true} 
            prefix={'Rs.'} 
            decimalScale={2}
            renderText={value => (
                       <>
                          
                           <p>Subtotal ({getItemCount(cart)} items) :<strong>{value}</strong> </p>
                           <small>
                           <input type="checkbox"/>This order contains a gift
                           </small>
                           {/* <button onClick={simpleAlert} className="sub_btn">Proceed to checkout</button> */}
                           <PaypalBtn />
                        </>
                           )} />
        </div>
    )
}

export default Subtotal
