import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const EditStudent = () =>{
    const [student, setStudent] = useState({
        f_name:'',
        l_name:'',
        class:''
    })
    const [loginis, setloginis] = useState({username:'',password:''})
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        fetchStudent()
    },[])

    const fetchStudent = async () =>{
       await axios.get(`http://localhost:5000/student/${id}`)
        .then((res)=>setStudent(res.data))
    }

    const handlechange = (e) =>{
        setStudent({...student,[e.target.name]:e.target.value})
    }

    const handleupdate = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/student/${id}`,student)
        navigate('/student')
    }
    const handleLogin = () =>{
        if(loginis.username=='admin' && loginis.password=='admin'){
            setisAuthenticated(true)
        }
    }
    const handlepass = (e)=>{
       setloginis({...loginis,[e.target.name]:e.target.value})
       console.log(loginis)

    }
    if (!isAuthenticated) {
        return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            <h1 className="text-2xl font-bold mb-4">Login to Access CRUD App</h1>
            
            <input
              type="text"
              className="border p-2 rounded mb-2"
              name="username"
              placeholder="Enter username"
              value={loginis.username}
              onChange={
                handlepass
            }
            />
            <input
            name="password"
              type="password"
              className="border p-2 rounded mb-2"
              placeholder="Enter Password"
              value={loginis.password}
              onChange={handlepass
                
            }
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Login
            </button>
          </div>
        );
      }
    return (
        <div>
            <form onSubmit={handleupdate}>
            <ul>
                First Name
                <li className="flex justify-between items-center bg-white p-2 my-2 shadow rounded">
                    <input type="text" 
                    className="form-control"
                        name="f_name" 
                        value={student.f_name} 
                        onChange={handlechange}
                    />
                </li>
                Last Name
                <li>
                    <input type="text" 
                        name="l_name" 
                        value={student.l_name} 
                        onChange={handlechange}
                    />
                </li>
                Class
                <li><input type="text" 
                        name="class" 
                        value={student.class} 
                        onChange={handlechange}
                    />
                </li>
                
            </ul>
            <button type="submit">update</button>
            </form>
        </div>
    )


}

export default EditStudent;