import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ItemList = () => {
  const [items, setitems] = useState([])
    const naviget = useNavigate;
  useEffect(()=>{
    fetchItems()
},[])
    const fetchItems = async () =>{
        const response = await axios.get('http://localhost:5000/store')
        setitems(response.data)
    }

    const deleteItem = async (id) =>{
        await axios.delete(`http://localhost:5000/store/${id}`)
        fetchItems()
    }

    return(
        <div>
            <h>Items List</h>
            <br/>
            <Link to={'/additem'}>
                Add Item
            </Link>
            <ul>
                {items.map((item)=>(
                    <li key={item.id}>{item.name}---{item.type}---{item.price}---{item.unit}
                    ----
                    <Link to={`/Edititem/${item.id}`}>edit</Link>
                    <button type="submit" 
                        onClick={()=>deleteItem(item.id)}>
                            Delete
                            </button>
                    </li>
                ))
                }
            </ul>

        </div>
    )
}

export default ItemList;