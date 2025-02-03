import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = ()=>{
const [student, setStudent] = useState([])

useEffect(()=>{
    fetchStudent()
},[])
const fetchStudent= async () =>{
    const response = await axios.get('http://localhost:5000/student')
    .then((res)=>setStudent(res.data))
}
const hadledelete = async (id) =>{
    await axios.delete(`http://localhost:5000/student/${id}`)
    fetchStudent()
}
return (
    <div>
        <h1>Student List</h1>
            <br/>
            <Link to={'/addStudent'}>Add Student</Link>
            <br />
            <table>
                <thead>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Class Name</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                    student.map((stud)=>(
                    <tr key={stud.id}>
                        <td>{stud.f_name}</td>
                        <td>{stud.f_name}</td>
                        <td>{stud.l_name}</td>
                        <td>{stud.class}</td>
                        <td>
                            <Link to={`/edit/stud/${stud.id}`}>Edit</Link>
                            <button 
                            onClick={()=>hadledelete(stud.id)}
                            >Delete</button>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
    </div>
)    

}

export default Student;