import React, { Component } from 'react'
import {Container, Row, Col, Button, Form, Navbar, Nav, NavItem, NavLink} from 'react-bootstrap';
import logo_png from '../images/logo_png.png';
import logo_text from '../images/logo_text.png';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="" className="color-sub" id="pc" fixed="top">
                    <Navbar.Brand className="link" onClick={() => this.props.history.push('/')}>
                    <img
                        src={logo_text}
                        width="auto"
                        height="35"
                        className="d-inline-block align-center"
                        id="logo-navbar"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="link text-medium" id="navbar-text" onClick={() => this.props.history.push('/inside-my-head')}>잡생각</NavLink>
                        <NavLink className="link text-medium" id="navbar-text" onClick={() => this.props.history.push('/you-may-like-these')}>책 추천</NavLink>
                        <NavLink className="link text-medium" id="navbar-text" onClick={() => this.props.history.push('/what-is-this')}>여긴 어디</NavLink>
                    </Navbar.Collapse>
                </Navbar>

                <Navbar bg="" className="color-sub" id="mobile" fixed="top">
                    <Navbar.Brand className="link" onClick={() => this.props.history.push('/')}>
                    <img
                        src={logo_text}
                        width="auto"
                        height="25"
                        className="d-inline-block"
                        id="logo-navbar"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="link text-small" id="navbar-text" onClick={() => this.props.history.push('/inside-my-head')}>잡생각</NavLink>
                        <NavLink className="link text-small" id="navbar-text" onClick={() => this.props.history.push('/you-may-like-these')}>책 추천</NavLink>    
                        <NavLink className="link text-small" id="navbar-text" onClick={() => this.props.history.push('/what-is-this')}>여긴 어디</NavLink>
                    </Navbar.Collapse>
                </Navbar>

                <br/><br/><br/>
            </div>
        )
    }
}

export default NavigationBar