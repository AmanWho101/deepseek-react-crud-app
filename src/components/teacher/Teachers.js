import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Teacher = () =>{
    const [teacher, setTeacher] = useState([])

    useEffect(()=>{
        featchTeacher()
    },[])

    const featchTeacher = async () =>{
        await axios.get('http://localhost:5000/teachers')
        .then((res)=>setTeacher(res.data))
    }
    const handledeletes = async (id) =>{
        await axios.delete(`http://localhost:5000/teachers/${id}`)
        featchTeacher()
    }
    const style ={
        border:"1px solid black"
    }
    return(
        <div>
            <h1>Teacher List</h1><br/>
            <Link to={'/addTeacher'}>Add Teacher</Link>
            <br/>
            <table style={style}>
                <thead>
                    <th style={style}>#</th>
                    <th style={style}>First Name</th>
                    <th style={style}>Last Name</th>
                    <th style={style}>Field of Study</th>
                    <th style={style}>Action</th>
                </thead>
                <tbody>
                    {teacher.map((data, index)=>(
                        <tr  key={data.id}>
                            <td>{index+1}</td>
                            <td style={style}>{data.fname}</td>
                            <td style={style}>{data.lname}</td>
                            <td style={style}>{data.fstudy}</td>
                            <td style={style}>
                                <Link to={`/edit/teacher/${data.id}`}>Edit</Link>
                              
                                <button type="submit" onClick={() => handledeletes(data.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Teacher;