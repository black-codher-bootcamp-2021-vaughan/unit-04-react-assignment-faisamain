import './styles/App.css';
import React from 'react';
import Product from './components/product.js';
import ProductList from './components/productList.js';
import Products from './models/data.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/search.js';
import Header from './components/header.js';


// import search from './components/search.js;'
// import ReactDOM from 'react-dom';

// const Products = [
//   { trackName:"Thinkin Bout You", trackPrice:"£1.29", artistName:"Frank Ocean"},
//   { trackName:"Orange", trackPrice:"£1.29", artistName:"seven oops"},
//   {trackName:"Forrest Gump", trackPrice:"£1.29", artistName:"Frank Ocean" },
//   {trackName:"Bad Religion", trackPrice:"£1.29", artistName:"Frank Ocean" },
//   {trackName:"Orange Crush", trackPrice:"£1.29", artistName:"R.E.M." },
// ];

function App() {
  return (
    <>
     <h1>My Music</h1>
     <Search/>
     <ProductList Products={Products}/>
     {/* <Header/> */}
     
    

     {/* {Products.map((product) => (
      <Product 
      trackName={product.trackName} 
      trackPrice={product.trackPrice} 
      artistName= {product.artistName}/>
     ))} */}

     {/* <Product trackName="Thinkin Bout You" trackPrice="£1.29" artistName="Frank Ocean"/> 
     <Product trackName="Orange" trackPrice="£1.29" artistName="seven oops"/> */}
    </>
     
       
        
  
  );
}



export default App;
