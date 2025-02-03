import { use, useEffect,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Addteacher = () =>{
    const [teacher, setTeacher] = useState({
        fname:'',
        lname:'',
        fstudy:''
    })
    const navigate = useNavigate()

    const handlechange = (e)=>{
        setTeacher({...teacher,[e.target.name]:e.target.value})
    }
    const addTeachers = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:5000/teachers',teacher)
        navigate('/teacher')
    }
    return(
        <div>
            <form onSubmit={addTeachers}>
                <lable>First Name</lable>
                <input type="text" name="fname" onChange={handlechange} placeholder="First Name" />
                
                <lable>Last Name</lable>
                <input type="text" name="lname" onChange={handlechange} placeholder="Last Name" />
                
                <lable>Field of study</lable>
                <input type="text" name="fstudy" onChange={handlechange} placeholder="Field of study" />
                <br/>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}
export default Addteacher;