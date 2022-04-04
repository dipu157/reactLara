import React, { Component, Fragment } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <Fragment>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand className='text-dark' href="#home">React Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mr-auto">
                            <NavLink className='nav-font' to='/'> Home </NavLink>
                            <NavLink className='nav-font' to='/courseplan'> Course Plan </NavLink>                      
                            <NavLink className='nav-font' to='/registration'> Registration </NavLink>                         
                            <NavLink className='nav-font' to='/freeclass'> Free Class </NavLink>                         
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        )
    }
}

export default Menu
