import React, { Component, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Autosuggest from "react-autosuggest";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../context";
import { auth } from "../firebase";


let cat=[];
const getSuggestions = (fdata,value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
   
   fdata.forEach((dt)=>{
      if (cat.indexOf(dt.category)===-1){
        cat.push(dt.category);
      }
   })

  return inputLength === 0 ? []: cat.filter(
        (dt) => dt.toLowerCase().slice(0, inputLength) === inputValue
      );
};
const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

const Navbar = () => {

  
  const [{cart,fdata,user},dispatch] = useStateValue();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let history = useHistory();
  
  const getItemCount=(cart)=>{
    let a=cart?.reduce((len,item)=> item.quantity+len ,0)
    
    return a
   }
  

  function handleClick() {
    let fil = cat.filter((dt) => dt=== value);
    if (fil.length > 0) {
      history.push(`/product/${value}`);
    }
  }
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, index, method }
  ) => {
    // event.preventDefault();
    history.push(`/product/${suggestion}`);
    // console.log(suggestion);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(fdata,value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search for products and more",
    value,
    onChange: onChange,
  };


  const login=()=>{
    if(user){
    auth.signOut();
    }
  }
 
  return (
    <nav className="nav_bar">
      <Link to="/" className="nav_link">
        <img
          className="nav_logo"
          src="https://pluspng.com/img-png/shop-png-black-and-white-logo-512.png"
          alt="logo"
        ></img>
      </Link>
      <h4>Shopping-zone</h4>

      <div className="nav_search">
        {/* <input className="nav_input" type="text"></input>
                <SearchIcon className="nav_searchIcon"></SearchIcon> */}

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />

        <SearchIcon
          className="nav_searchIcon"
          onClick={handleClick}
        ></SearchIcon>
      </div>

      <div className="nav_options">
        <Link to={!user && "/login"} className="nav_link">
          <div onClick={login} className="nav_option">
              <span>Hello,{user?.email}</span>
              <span className="nav_bold">{ user? "Sign Out" : "Sign in"}</span>
          </div>
        </Link>
        <Link to="/" className="nav_link">
          <div className="nav_option">
            <span>your</span>
            <span className="nav_bold">Orders</span>
          </div>
        </Link>
        <Link to="/cart" className="nav_link">
          <div className="nav_cart">
               <ShoppingCartIcon></ShoppingCartIcon>
              <span className="nav_count">{getItemCount(cart)}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
