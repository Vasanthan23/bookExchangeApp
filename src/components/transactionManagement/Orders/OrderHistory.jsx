import React from "react";
import '../../../App.css'
import './orderHistoryPage.css';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import {  useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const OrderHistory = () => {
    const{getOrderHistory}=useContext(AuthContext);
    const navigate = useNavigate();
    const [orders,setOrders] = useState()
    
    async function fetchOrderHistory(){
    const response = await  getOrderHistory()
    if(response != undefined){
        const orders = response?.data?.order;
        setOrders(orders)

    }
}
    const handleOkay = () => {
        navigate('/books');
      }

    useEffect(() => {
        fetchOrderHistory();
      },[])

    return (      
        <>
        <div className="cart-item">
        <div className="cart-header">
        <h4>Please find below details on your Past Orders</h4>
      </div>
      {
        orders && orders.orderDetails && orders.orderDetails.map(
          (order)=>(
            <div className="cart_box" >
        <div className="cart_img">
        {<img src= {order.imageUrl} /> }
        <span>
        <li>    
        <p>Name: {order.name} </p> </li>
        <li> Date: {order.date}</li>
        <li>Status: {order.status}</li>
        </span>
        </div>
        <div> 
        
         </div>
        </div>
          )
        )
      }
        {
          orders && orders.length === 0 && 
          <div className="cart_box">
            <p>Sorry, no Order History found</p>
            </div>
          
        } 

      </div>
      <span>
              <Button
          variant="contained"
          onClick={()=> handleOkay()}>OKAY</Button>

      </span>
      
       
        </>  
       
    )
}

export default OrderHistory;