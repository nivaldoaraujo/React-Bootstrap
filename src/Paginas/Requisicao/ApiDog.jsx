//api com site DogCeo

import { useState } from "react"
import './requisicao.css'

function ApiDog()
{
    const [dog, setDog] = useState()
    //método
    function Add()
    {
        const url = 'https://dog.ceo/api/breeds/image/random'
        fetch(url)
        .then(function(response){
                return response.json()
                console.log(response)
        })
        .then((data) => { 
        setDog(data.message)
        console.log(data.message) 
        })
            
    }
    return(
        <>
            <div class="foto">
                <img src={dog} />
            </div>
            <br /><br />
            <div> <button onClick={Add} >Clicar</button> </div>
        </>
    )
}
export default ApiDog