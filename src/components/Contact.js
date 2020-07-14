import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, Image } from 'react-bootstrap'
import email from '../pictures/email.png'
import linkedin from '../pictures/linkedin.jfif'
import github from '../pictures/github.png'
import '../styles.css'

function Contact() {
    return (
        <Container id='Contact' className='contact-container' fluid>
            <Row>
                <Col xs={12} className='section-header'>
                    <ScrollAnimation
                        animateIn='slideInLeft'
                        animateOnce={true}
                    >
                        <h1><u>Would love to connect!</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='slideInBottom'
                animateOnce={true}
            >

                <Row className={'pt-5'}>
                    <Col xs={12} md={4} className='sub-contact-container'>

                            <a className='contact-links' href='mailto:hg293@scarletmail.rutgers.edu'>
                                <Image
                                    className='contact-logos'
                                    src={email}
                                    rounded
                                />
                                 <p>hg293@rutgers.edu
                                 </p>
                                 
                            </a><br/>
                                <a className='contact-links' href='mailto:hrshthgachar@gmail.com'>
                                <p>hrshthgachar@gmail.com
                                </p>
                                 
                                </a>
                    </Col>

                    <Col xs={12} md={4} className='sub-contact-container'>
                        <a
                            className='contact-links'
                            href='https://www.linkedin.com/in/harshitha-govindaraju/'
                            target='_blank'
                        >
                            <Image
                                className='contact-logos'
                                src={linkedin}
                                rounded
                            />
                            <p>Harshitha Govindaraju</p>
                        </a>
                    </Col>

                    <Col xs={12} md={4} className='sub-contact-container'>
                        <a
                            className='contact-links'
                            href='https://github.com/hg293'
                            target='blank'
                        >
                            <Image
                                className='contact-logos'
                                src={github}
                                rounded
                            />
                            <p>hg293</p>
                        </a>
                    </Col>

                </Row>
            </ScrollAnimation>

            <Row className='padding-copyright'>
                <Col xs={12}>
                    <p className='copyright-style'>
                        HARSHITHA GOVINDARAJU ©2020
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
