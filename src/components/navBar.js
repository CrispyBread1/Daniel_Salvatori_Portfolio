import { Link,  } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/project_board">project board</Link></li>
            </ul>
        </div>
    )
}

export default NavBar