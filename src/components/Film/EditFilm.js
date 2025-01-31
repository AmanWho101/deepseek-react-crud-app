import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const EditFilm = () =>{

    const [film, setFilms] = useState({ name:'', genres:'', rating:''});
    const navigate = useNavigate();
     const { id } = useParams();


    useEffect(()=>{
        fetchFilms();   
       }, [])
   
       const fetchFilms = async ()=>{
               const response = await axios.get(`http://localhost:5000/films/${id}`);
               setFilms(response.data);
       }

       
    const handleChanges = (e) =>{
        setFilms({ ...film, [e.target.name]: e.target.value });
    }
    const handleSubmits =async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/films/${id}`,film);
        navigate('/films');
    }

    return(
        <div>
            <h2>Add Films</h2>
                <form onSubmit={handleSubmits}>
                    <label>Name:</label>
                    <input type="text" name="name" value={film.name} onChange={handleChanges} />
                    <label>Genres:</label>
                    <input type="text" name="genres" value={film.genres} onChange={handleChanges} />
                    <label>Rating:</label>
                    <input type="text" name="rating" value={film.rating} onChange={handleChanges} />
                    <button type="submit">Update</button>
                </form>
    </div>
    )
}

export default EditFilm;