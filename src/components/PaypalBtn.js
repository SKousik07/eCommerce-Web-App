import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useStateValue } from '../context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 toast.configure()
 const PaypalBtn =({total})=>{

    const notifyerr= () => toast.error("payment was not successful");
    const notifysuc= () => toast.error("Payment not successful");
    const [{cart}]= useStateValue();
    const getCartTotal=(cart)=>{
        let a=cart?.reduce((amt,item)=> ((item.price*item.quantity)+amt),0)
        // setTotal(a)
        return a
    }

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                    console.log("The payment was succeeded!", payment);
                    notifysuc();
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            notifyerr();
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'INR'; // or you can set this value from your props or state
        // let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'ARnihoHzGr0j1AFPGtCEyXhjhRWffUbP6LfvYYTmN3rien-iHkX2-nHeXKGJ94MMKNSIFbOJijG4RoA9',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={getCartTotal(cart)} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    
}

export default PaypalBtn;