import { Link,  } from "react-router-dom";
import React from "react";


const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="Daniel_Salvatori_Portfolio/">Home</Link></li>
                <li><Link to="Daniel_Salvatori_Portfolio/cv">CV</Link></li>
                <li><Link to="Daniel_Salvatori_Portfolio/project_board">project board</Link></li>
            </ul>
        </div>
    )
}

export default NavBar