import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavContainer>
                <Link to="/"></Link>
                <Link to="/cv"></Link>
                <Link to="/project_board"></Link>
            </NavContainer>
        </div>
    )
}

export default NavBar