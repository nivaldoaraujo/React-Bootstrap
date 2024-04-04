import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Paginas/Home/Home";
import Sobre from "./Paginas/Sobre/Sobre";
import Contatos from "./Paginas/Contatos/Contatos";
import Requisicao from "./Paginas/Requisicao/Requisicao";
import ApiDog from "./Paginas/Requisicao/ApiDog";
import PlaceHolder from './Paginas/Requisicao/PlaceHolder'



function AppRotes(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } ></Route>
            <Route path="/sobre" element={ <Sobre /> } ></Route>
            <Route path="/contatos" element={ <Contatos /> } ></Route>
            <Route path="/api" element={ <Requisicao /> } ></Route>
            <Route path="/apidog" element={ <ApiDog /> } ></Route>
            <Route path="/img" element={ <PlaceHolder /> } ></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRotes
