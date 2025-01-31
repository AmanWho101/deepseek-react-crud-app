import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


const FilmsList =()=>{
    const [films, setFilms] = useState([])

    useEffect(()=>{
     fetchFilms()   
    }, []);

    const fetchFilms = async ()=>{
            const response = await axios.get('http://localhost:5000/films')
            setFilms(response.data)
    } 

    const deleteFilm = async (id) => {
        await axios.delete(`http://localhost:5000/films/${id}`)
        fetchFilms()
    }
    return(
        <div>
            <ul>
                <Link to={'/addfilms'}>Add Film</Link><br/><Link to={'/'}>Home</Link>
                <li><u>Movie Name --------- Genres --------- Rating ------- Action</u></li>
                {films.map((film)=>(
                    <li key={film.id}>
                        {film.name} - - - - - - - - {film.genres} - - - - - - - - {film.rating}
                        - - - - - - - - <Link to={`/edit_film/${film.id}`}>Edit</Link>
                        - - - <button onClick={() => deleteFilm(film.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default FilmsList;