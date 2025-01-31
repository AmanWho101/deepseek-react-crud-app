import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddFilm = () =>{

    const [film, setFilms] = useState({ name:'', genres:'', rating:''});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        console.log(e)
        setFilms({ ...film, [e.target.name]: e.target.value })
    }

    const handleSubmit =async (e) =>{
        e.preventDefault()
        await axios.post(`http://localhost:5000/films`,film) 
        navigate('/films')
    }

    return(
        <div>
            <h2>Add Films</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={film.name} onChange={handleChange} />
                    <label>Genres:</label>
                    <input type="text" name="genres" value={film.genres} onChange={handleChange} />
                    <label>Rating:</label>
                    <input type="text" name="rating" value={film.rating} onChange={handleChange} />
                    <button type="submit">Add</button>
                </form>
    </div>
    )
}

export default AddFilm;