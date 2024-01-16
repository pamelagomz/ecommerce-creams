import React,  { useEffect, useState }  from 'react'
import './productlist.css'
import Carditem from "../CardItem/CardItem";
import imageCream from '../../assets/Creams-ColorCrema.png'
import imageCoral from '../../assets/Creams-Coral.png'
import imageVerde from '../../assets/Creams-verde.png'
import imagePink from '../../assets/Creams-Rosa.png'



const ProductList = () => {

    const [rockets, setRockets] = useState([])

    useEffect(() => {
        //traer los datos de la api 
        fetch('https://api.spacexdata.com/v4/rockets')
        .then((res) => res.json()) //convertir a json
        .then((data) => setRockets(data)) //guardar en el estado
        .catch((err) => console.log(err))
    }
    , []);
    
    return (
        <div className="product-card-list">
          {rockets.map((product) => (
            <Carditem
              key={product.id}
              title={product.name}
              description={product.company}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      );
}

export default ProductList