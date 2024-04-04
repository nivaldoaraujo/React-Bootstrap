

//api com site DogCeo

import { useState } from "react"
import './requisicao.css'

function Place()
{
    const [dog, setDog] = useState()
    const id = 20
    //método
    function Add()
    {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`
        fetch(url)
        .then(function(response){
                return response.json()
                console.log(response)
        })
        .then((data) => { 
        setDog(data.url)
        console.log(data.url) 
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
export default Place