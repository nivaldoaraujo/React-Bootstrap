import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Paginas/Home/Home";
import Sobre from "./Paginas/Sobre/Sobre";
import Contatos from "./Paginas/Contatos/Contatos";


function AppRotes(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } ></Route>
            <Route path="/sobre" element={ <Sobre /> } ></Route>
            <Route path="/contatos" element={ <Contatos /> } ></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRotes
