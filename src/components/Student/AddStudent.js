import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddStudent = () =>{
    const [student, setStudent] = useState(
        {
            f_name:'',
            l_name:'',
            class:''
    })
    const navigate = useNavigate()

    const handlechange = (e)=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const handleSubmite = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5000/student',student)
        navigate('/student')
    }

    return (
        <div>
            <h1>Register Student</h1>
            <br/>
            <form onSubmit={handleSubmite}>
                <lable>First Name</lable>
                <input name='f_name' type="text" 
                onChange={handlechange} /><br/><br/>
                <lable>last Name</lable>
                <input name='l_name' type="text" 
                onChange={handlechange} /><br/><br/>
                <lable>class</lable>
                <input name='class' type="text" 
                onChange={handlechange} /><br/><br/>
                <button type="submit">Add Student</button>
            </form>
            <br/>
            
        </div>
    )
}

export default AddStudent;