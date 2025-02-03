import { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link, useNavigate } from "react-router-dom";
const Editteacher = () =>{
    const [teacher, setTeacher] = useState({
        fname:'',
        lname:'',
        fstudy:''   
    })
    const navigate = useNavigate()
    const {id}= useParams()
    useEffect(()=>{
        fetchTeacher(id)
    },[])
    const fetchTeacher = async (id)=>{
        await axios.get(`http://localhost:5000/teachers/${id}`)
        .then((res)=>setTeacher(res.data))
    }
    const handleupdate =async (e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:5000/teachers/${id}`,teacher)
        navigate('/teacher')
    }
    const handlechange =(e)=>{
        setTeacher({...teacher,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <form onSubmit={handleupdate}>
                <label>First Name</label>
                <input type="text" name="fname" onChange={handlechange} value={teacher.fname} placeholder="First Name"/>
                <label>Last Name</label>
                <input type="text" name="lname" onChange={handlechange} value={teacher.lname} placeholder="Last Name"/>
                <label>Field of Study</label>
                <input type="text" name="fstudy" onChange={handlechange} value={teacher.fstudy} placeholder="Field of Study"/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default Editteacher;