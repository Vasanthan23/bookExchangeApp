import React, { useContext, useEffect, useState } from "react";
import useStyles from './Products/Product/styles.js';
import { Grid,Input,InputAdornment } from '@material-ui/core';
import Product from './Products/Product/Product';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import axios from "axios";
import {AuthContext  } from "./../context/authContext.js";

function UserProfile() {
  const[bookList,setBookList]=useState(null);
  const{setIsLoading}=useContext(AuthContext)
  const classes = useStyles();

  useEffect(()=>{
    fetchBooks()},[])

  const fetchBooks=async()=>{
    setIsLoading(true)
    try{
      const response = await axios.get('http://localhost:4000/books/');
      const bookList = response?.data?.books.slice(5);
      if(bookList != undefined){
        setBookList(bookList)
      }
      setIsLoading(false)
    }
    catch(error){
      console.log(error);
      setIsLoading(false)
    }
  }
  return (
    <div>
     <Grid
                  className={classes.categoryFeatured}
                  container
                  justify="center"
                  spacing={1}
                >
                    {bookList&&bookList
                    .map((product) => (
                <Grid
                  className={classes.categoryFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                  key={product.name}
                >
                  <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
            style={{cursor:"none"}}
          />
        </CardActionArea>
      <CardContent>
        <div className={classes.cardContent}>
          <p className={classes.cardContentName}> {product.name}</p>
        </div>
      </CardContent>
      </Card>
                </Grid>
              ))}
                </Grid>
    </div>
  );
}

export default UserProfile;