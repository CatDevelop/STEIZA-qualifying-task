import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/img/logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/">
                        {/*<div>*/}
                        <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('home')}><div>HOME</div></Nav.Link>
                        {/*</div>*/}
                    </LinkContainer>
                    <LinkContainer to="/collections">
                        <Nav.Link
                            className={activeLink === 'collections' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('collections')} style="margin-left: 25px !important">COLLECTIONS</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/company">
                        <Nav.Link
                            className={activeLink === 'company' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('company')} style="margin-left: 25px !important">COMPANY</Nav.Link>
                    </LinkContainer>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <LinkContainer to="/catalog">
                                <a href="*"><img src={navIcon1} alt="" /></a>
                            </LinkContainer>
                            <LinkContainer to="/search">
                                <a href="*"><img src={navIcon2} alt="" /></a>
                            </LinkContainer>
                        </div>
                    </span>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}
