import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditItem = () => {

    const [items, setitems] = useState({name:'',type:'',price:'',unit:''})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems= async ()=>{
        const response = await axios.get(`http://localhost:5000/store/${id}`)
        setitems(response.data)
    }

    const handleChange = (e) =>{
        setitems({...items,[e.target.name]:e.target.value})
    }

    const handleUpdate = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/store/${id}`,items)
        navigate('/store')
    }
    return(
        <div>
            <form onSubmit={handleUpdate}>
                <lable>Item Name</lable>
                <input onChange={handleChange} 
                type="text" name="name" 
                value={items.name} 
                placeholder="Item Name" />
                <lable>Item Type</lable>
                <input onChange={handleChange} 
                type="text" name="type" 
                value={items.type} 
                placeholder="Item type" />
                <lable>Item Price</lable>
                <input onChange={handleChange} 
                type="text" name="price" 
                value={items.price} 
                placeholder="Item price" />
                <lable>Item unit</lable>
                <input onChange={handleChange} 
                type="text" name="unit" 
                value={items.unit} 
                placeholder="Item unit" />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditItem; 