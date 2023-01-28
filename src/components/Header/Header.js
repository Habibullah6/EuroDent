import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Header.css';


const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (

        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand as={NavLink} to='/' className='fs-3 fw-bold'>EuroDent</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end nav-container">

                    <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                    <Nav.Link as={NavLink} to='/services'>Services</Nav.Link>

                    {
                        user.displayName ? <Nav.Link onClick={handleSignOut} className='border border-2 border-dark rounded'>Logout</Nav.Link> : <Nav.Link as={NavLink} to='/login' className='border border-2 border-dark rounded'>Login</Nav.Link>
                    }

                    <span className='text-primary fw-bold ms-3'>{user.displayName}</span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;