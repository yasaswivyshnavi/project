
import {Nav,Navbar,NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navigation1(){
    return(
           <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <NavLink eventKey="1" as={Link} to="/">Register</NavLink>
                            <NavLink eventKey="2" as={Link} to="/Login">Login</NavLink>
                            <NavLink eventKey="3" as={Link} to="/Home">Home</NavLink>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
            )

} 
export default Navigation1
