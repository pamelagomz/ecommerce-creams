import React, {useState, useEffect} from 'react'

const PruebaMontake = () => {

    //definir numeros 
    const [numero, setNumero] = useState(0)

    //montaje 
    useEffect(() => {

        //iniciar datos (llamadas a la api)
        //interactuar con el DOM    
        //Iniciar librerias externas (Jquery, Materialize, etc)
        console.log("Prueba Montaje")

    }, [])

    //actualizacion /change 

    useEffect(() => {
        //realizar operaciones basadas en el estado 
    
            console.log("estoy actualizando")
        //Si numero es mayor a 5 deshabilitar el boton 
        if(numero > 5){
            console.log("Mayor a 5")

        }

        //desmontaje 
        if(numero === 10){
            setNumero(0) 
        return () => {
            console.log("desmontaje")
        }
    }

    
        }, [numero])

  return (
    <div>
        <h1>Prueba Montaje</h1>
        <h2>Numero: {numero}</h2>
        <button onClick={()=> setNumero(numero + 1)}>Aumentar</button>

    </div>
  )
}

export default PruebaMontake
