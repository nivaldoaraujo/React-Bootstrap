import { useState } from "react"


export function ServerJason()
{
    //const [valor, setValor] = useState([])
 
    fetch('http://localhost:3000/usuarios')
      .then(response => response.json())
      .then(json => console.log(json))
        
    return(
        <>
        </>
    )
}