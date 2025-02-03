import { Link } from "react-router-dom";

const Home = () =>{

    return(
     <div>
        <ul>
            <u>Choose Destination</u>
            <hr />
            <li>
                <Link to={'/user'}> User </Link>
            </li>
            <li>
                <Link to={'/films'}> Films </Link>
            </li>
            <li>
                <Link to={'/store'}> Store </Link>
                
            </li>
            <li>
                <Link to={'/student'}> Student </Link>
            </li>
            <li>
                <Link to={'/teacher'}> Teacher </Link>
            </li>
        </ul>
     </div>
)
}

export default Home;