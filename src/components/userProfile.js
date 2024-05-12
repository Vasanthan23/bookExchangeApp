import React, { useEffect, useState } from "react";
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

function UserProfile() {
  const[bookList,setBookList]=useState([]);
  const classes = useStyles();

  useEffect(()=>fetchBooks(),[])
  const fetchBooks=async()=>{
    try{
      const response = await axios.get('http://localhost:4000/books/');
      const bookList = response?.data?.books.slice(5);
      if(bookList != undefined){
        setBookList(bookList)
      }
    }
    catch(error){
      console.log(error);
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
                    {bookList
                    .map((product) => (
                <Grid
                  className={classes.categoryFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
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