import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import settingsIcon from "../images/Setting.svg";
import searchIcon from "../images/search.svg";
import notification from "../images/Notification.svg"
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import profileImage from '../images/profile.png';


const SearchBarStyle = {
    background: "white",
    outline: "none"
}



function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg" className='' style={{background: "#F8F9FA"}}>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="w-100 me-auto my-2 my-lg-0 d-flex justify-content-between"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Form className="d-flex" style={SearchBarStyle}>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        style={{border: "0"}}
                        />
                        <Button variant="">
                            <img src={searchIcon} alt="search"/>
                        </Button>
                    </Form>
                    <div className='d-flex justify-content-end align-items-center'>
                        <NavLink to='/' className="mx-2">
                            <NavItem>
                                <img src={settingsIcon} alt="settings" />
                            </NavItem>
                        </NavLink>
                        <NavLink to='/' className="mx-2">
                            <NavItem>
                                <img src={notification} alt="notification" />
                            </NavItem>
                        </NavLink>
                        <div className="vr"></div>
                        <div className="profile-info d-flex ">
                            <div className="profile-pic mx-3">
                                <img src={profileImage} alt="profile" />
                            </div>
                            <div className="profile-info d-flex flex-column align-items-center ">
                                <p className="name text-start w-100 mb-0">Samuel Owolabi</p>
                                <p className="course text-start w-100 mb-0">Computer Science - 300 lvl</p>
                            </div>
                        </div>
                    </div>
                    
                   
                </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;