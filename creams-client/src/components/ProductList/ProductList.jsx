import React,  { useEffect, useState }  from 'react'
import './productlist.css'
import Carditem from "../CardItem/CardItem";
import imageCream from '../../assets/Creams-ColorCrema.png'
import imageCoral from '../../assets/Creams-Coral.png'
import imageVerde from '../../assets/Creams-verde.png'
import imagePink from '../../assets/Creams-Rosa.png'



const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        //traer los datos de la api 
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json()) //convertir a json
        .then((json) => setProducts(json)) //guardar en el estado
        .catch((err) => console.log(err))
    }
    , []);
    
    return (
        <div className="product-card-list">
          {products.map((product) => (
            <Carditem
              key={product.id}
              title={product.title}
              description={product.price}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      );
}

export default ProductList