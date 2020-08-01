import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cart from './components/Cart';
import  { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Product from './components/Product';
import img from './assets/mob1.png'
import Home from './components/Home';
import db,{auth} from './firebase';
import { useStateValue } from './context';
import SignUp from './components/SignUp';

function App() {
  const [fireData,setFiredata] = useState([]);
  const [{fdata,user},dispatch]=useStateValue();
  useEffect(()=>{
      db.collection('data').onSnapshot(snapshot =>{
           setFiredata(snapshot.docs.map(doc => doc.data()))
      
      } ) 
     const unsubscribe=auth.onAuthStateChanged((authUser)=>{
       if (authUser){
             dispatch({
               type: "SET_USER",
               user: authUser
             })
       }
       else{
        dispatch({
          type: "SET_USER",
          user: null
        })
       }
     })

     return ()=>{
       unsubscribe();
     };
  },[])


  useEffect(() => {
    console.log(fireData)
    console.log(fdata)
    dispatch({
      type:"ADD_DATA",
      item: fireData
    })
  }, [fireData])
 
  console.log("log-"+ user)
  return (
    <Router>
    <div className="App">
         <Navbar/>
         <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/product/:name">
            <Product/>
          </Route>
          <Route exact path="/">
             <Home/>
            
          </Route>
        </Switch>
  
    </div>
    </Router>
  );
}

export default App;
