import React from 'react'
import { useParams ,Link} from 'react-router-dom'

const Descreption = ({ mvl}) => {
    const params = useParams();
    const film = mvl.find((el) => el.id == params.id);
    return (
        <div className='desc'>
        <iframe width="700" height="500" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <pre >
        {film.description2}
       </pre>
     
    <Link to ={`/` }>  <button> return</button> </Link>
        </div>
    )
}

export default Descreption