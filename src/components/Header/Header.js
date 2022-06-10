import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="primary">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='fw-bold text-white fs-2'>EuroDent</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <div className='navigation-bar'>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/">About us</NavLink>
                        <NavLink to="/">Services</NavLink>
                        <NavLink to="/">Doctors</NavLink>
                        <NavLink to="/">Contact us</NavLink>
                      </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
};

export default Header;