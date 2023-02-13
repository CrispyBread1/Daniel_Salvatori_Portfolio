import { Link,  } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/cv"></Link></li>
                <li><Link to="/project_board"></Link></li>
            </ul>
        </div>
    )
}

export default NavBar