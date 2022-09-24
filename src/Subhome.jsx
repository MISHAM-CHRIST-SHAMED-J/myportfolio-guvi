import React from 'react'
import { Link, Outlet } from "react-router-dom";
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Subhome() {
  
  return (
    
   
<>
<Navbar bg="light"  expand="lg">
      
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="px-2" >
        <Nav.Item className="px-2 navbar-nav text-center">
        <Nav.Link  as={Link} to="/">MAIN</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-2 navbar-nav text-center">
        <Nav.Link as={Link} to="/home/about">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-2 navbar-nav text-center">
        <Nav.Link as={Link} to="/home/resume">RESUME</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-2 navbar-nav text-center">
        <Nav.Link as={Link} to="/home/project">PROJECT</Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-2 navbar-nav text-center">
        <Nav.Link as={Link} to="/home/contact">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
     
    </Navbar>

  
    
    <Outlet></Outlet>
    </>
 
  )
}

export default Subhome