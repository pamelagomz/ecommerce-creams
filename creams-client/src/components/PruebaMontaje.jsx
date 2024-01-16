import React, { useEffect, useState } from 'react'

const PruebaMontaje = () => {

    const [rockets, setRockets] = useState([])

    useEffect(() => {
        //traer los datos de la api 
        fetch('https://api.spacexdata.com/v4/rockets')
        .then((res) => res.json()) //convertir a json
        .then((data) => setRockets(data)) //guardar en el estado
        .catch((err) => console.log(err))
    }
    , []);

    //cuando se actualice rocket ejecutar console.log hola mundo 
    useEffect(() => {
        console.log('rockets actualizando')
    }, [rockets]);

    //Desmontar el componente 
    useEffect(()=> {
        return () => {
            console.log("Componente desmontado");
        }
    }, [rockets]);


//return del componente 
  return (

    <>
        <ur>
            {rockets.map((rockets) => {
            return <li> {rockets.name}</li>;
    })}
        </ur>

        <button onClick={()=> setRockets([])}>
            Borrar
        </button>
    </>
  );
}

export default PruebaMontaje