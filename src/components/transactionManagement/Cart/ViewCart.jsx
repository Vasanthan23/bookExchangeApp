import React from "react";
import './viewCart.css';
import {useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import {  useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const ShowMySelectedBooks = () => {
    const {selectedBooks,setSelectedBooks} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRemove = (id) =>{
      const arr = selectedBooks.filter((item)=>item.id !== id);
      setSelectedBooks(arr);
  }

  const handleBack = () => {
    navigate('/books');
  }
  const handleContinue = () => {
    if(selectedBooks && selectedBooks.length>0){
      alert("Your request will be processed Shortly" )
    }   
    navigate('/books');
  }
    return (      
        <>
        <div class="cart-item">
        <div class="cart-header">
        <h4>Books in your Cart</h4>
      </div>
      {
        selectedBooks && selectedBooks.map(
          (book)=>(
            <div className="cart_box" >
        <div className="cart_img">
        <img src= {book.media.source} />
        <p>{book.name}</p>
        </div>
        <div> 
        <button onClick={()=>handleRemove(book.id)} >Remove</button>
         </div>
        </div>
          )
        )
      }
        {
          selectedBooks && selectedBooks.length === 0 && 
          <div className="cart_box">
            <p>Your cart is empty</p>
            </div>
          
        } 

      </div>
      <span>
        <li>
        <Button
          variant="contained"
          onClick={()=> handleBack()}>BACK</Button>
          </li>
          <li>
       <Button
       variant="contained"
          onClick={()=> handleContinue()}>CONTINUE</Button>
        </li>
      </span>
      
       
        </>  
       
    )
}

export default ShowMySelectedBooks;
