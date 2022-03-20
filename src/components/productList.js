import React from "react";
import Product from "./product"




  const ProductList = (props) => {
      const {Products} = props;
      return Products.map((product) => (
        <>
        <Product 
        trackName= {product.trackName} 
        trackPrice= {product.trackPrice} 
        artistName= {product.artistName}
        />
        <img src={product.artworkUrl100} alt={product}/>
        </>
        
      ));
  };

  export default ProductList;
  