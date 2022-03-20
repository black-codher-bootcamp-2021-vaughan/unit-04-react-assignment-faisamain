import React from "react";

// const props = {trackName: "", trackPrice, "", artistName, ""}

const Product = (props) => {
   const { trackName, trackPrice, artistName, artworkUrl100 } = props;
    return (
    <div id="container">
    <div id="rcorners">
    <p>{trackName}</p>
    <p>{artistName}</p>
    <p>{trackPrice}</p>
    <section id="images">{artworkUrl100}</section>
    </div>
    </div>
    );
};

export default Product;