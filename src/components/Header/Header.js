import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Navbar.Brand className='fs-2 fw-bold text-primary' as={NavLink} to='/' >EuroDent</Navbar.Brand>
        </Nav>
        <Nav className='nav-container'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/login'>Login/Register</NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export default Header;