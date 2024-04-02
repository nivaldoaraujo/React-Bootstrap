import Card from './Card'
import Carrosel from '../Carrosel/Carrose'
import Rodape from '../../rodape/Rodape'
import Menu from '../../Menu/Menu'





function Home()
{
    return(
        <>
        <Menu />
        <Carrosel />
        <Card />
        <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et autem consequatur? Amet dolorem repellendus qui possimus exercitationem velit veritatis pariatur enim tenetur ipsa iure, fugiat adipisci suscipit ullam laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora necessitatibus magni deserunt, numquam doloribus quidem laudantium, repudiandae vitae, praesentium asperiores facilis nemo nesciunt perferendis eum veritatis? Rerum, porro doloribus.</p>
        </div>
       
        <Rodape />
        </>
    )
}

export default Home