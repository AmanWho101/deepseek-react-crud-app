import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ItemList = () => {
  


    return(
        <div>
            <h>Items List</h>
            <br/>
            <Link to={'/additem'}>
                Add Item
            </Link>

        </div>
    )
}

export default ItemList;