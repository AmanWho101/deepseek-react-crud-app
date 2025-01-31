import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddItem = () => {
    const [item, setItem] = useState({name:'',type:'',price:'',unit:''})
    const navigate = useNavigate()

    const handlechange = (e) =>{
        setItem({...item,[e.target.name]:e.target.value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        if(Object.keys(item.name).length!=0){
            await axios.post('http://localhost:5000/store',item)
            navigate('/store')
        }
    }

    return(
        <div>
            <h1>Add Item</h1>
            <br/>
            <Link to={'/store'}>Store</Link>
            <br/>
            <form onSubmit={handlesubmit} >
            <label>Name:</label>
            <input type="text" name="name" value={item.name} onChange={handlechange} placeholder="Item Name" />

            <label>Type:</label>
            <input type="text" name="type" value={item.type} onChange={handlechange} placeholder="Item type" />

            <label>Price:</label>
            <input type="text" name="price" value={item.price} onChange={handlechange} placeholder="Item price" />

            <label>Unit:</label>
            <input type="text" name="unit" value={item.unit} onChange={handlechange} placeholder="Item unit" />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddItem;