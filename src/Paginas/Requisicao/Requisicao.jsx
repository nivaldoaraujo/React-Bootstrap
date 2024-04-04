import { useState } from 'react'
import Menu from '../Requisicao/Requisicao'

function Requisicao()
{
    //const cep = 'https://viacep.com.br/ws/22770200/json/'
    const [cep, setCep] = useState()

    const onChangeInput = (event) => { setCep(event.target.value) }

    function FatchCep()
    {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.log("Cep não existe!!"))
    }

    
    return(
        <>
            <div>
            <input onChange={onChangeInput} ></input>
                <br /><br />
            <button onClick={FatchCep} >Consulta CEP</button>
            <h3>O cep Digitado foi: {cep}</h3>
           </div>         
        </>
    )
}

export default Requisicao

