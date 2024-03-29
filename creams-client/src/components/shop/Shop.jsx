import React from 'react'
import "./shop.css"
import Carditem from "../CardItem/CardItem";
import NavBar from "../navbar/navbar"
import BarNotice from '../BarNotice/BarNotice';
import ProductList from '../ProductList/ProductList';


function Shop({category}) {
  return (
    <div>
      <BarNotice>
            <p>¡Envíos <strong>gratis</strong> a todo el país!</p>
      </BarNotice>
      <ProductList category={category} />
      
    </div>
  )
}

export default Shop