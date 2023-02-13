import { Link,  } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to="/"></Link>
                <Link to="/cv"></Link>
                <Link to="/project_board"></Link>
            </ul>
        </div>
    )
}

export default NavBar