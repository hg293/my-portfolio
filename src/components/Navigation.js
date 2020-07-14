import React from 'react'
import '../styles.css'
import { Navbar, Nav } from 'react-bootstrap'
import * as Scroll from 'react-scroll'

class Navigation extends React.Component {
    constructor() {
        super()
    }

    render() {
        let Link = Scroll.Link
        let Element = Scroll.Element
        return (
            <Navbar collapseOnSelect fixed='top' className='color-nav' variant='dark' expand='lg'>
                {/* <Navbar.Brand
                    href='https://hg293.github.io/my-portfolio/'
                >
                    <h1><b>HG</b></h1>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Nav.Link><b>ABOUT</b></Nav.Link>
                        </Link>

                        <Link
                            activeClass="active"
                            to="Skills"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Nav.Link><b>SKILLS</b></Nav.Link>
                        </Link>

                        <Link
                            activeClass="active"
                            to="Experience"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Nav.Link><b>EXPERIENCE</b></Nav.Link>
                        </Link>

                        <Link
                            activeClass="active"
                            to="Education"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Nav.Link><b>EDUCATION</b></Nav.Link>
                        </Link>

                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Nav.Link><b>CONTACT</b></Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Navigation
