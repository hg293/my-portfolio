import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import profile from '../pictures/hg-profile-dp.jpg'
import email from '../pictures/email.png'
import linkedin from '../pictures/linkedin.jfif'
import github from '../pictures/github.png'
import '../styles.css'
import ScrollAnimation from 'react-animate-on-scroll'

function About() {
    return (
        <Container id='About' className='about-container' fluid>

            <Row>
                
                        
                <Col md={6} xs={12} className='profile-img'>
                <ScrollAnimation animateIn='flipInY' duration={10} animateOnce='true'>
                    <Image
                        className='profile-img'
                        src={profile}
                        responsive
                    />
                </ScrollAnimation>
                </Col>
                

                
                <Col md={6} xs={12} className='about-header'>
                    <ScrollAnimation animateIn='slideInRight' duration={3} animateOnce='true'>
                    <h3>
                        <b>HARSHITHA GOVINDARAJU</b>
                    </h3>

                    <h5>
                        BIOMEDICAL ENGINEER<br/>
                        New Jersey, USA
                    </h5>
                    <a
                        className='contact-links'
                        href='mailto:hg293@rutgers.edu'
                    >

                        <Image
                            className='about-contact-logos'
                            src={email}
                            rounded
                        />
                    </a>
                    <a
                        className='contact-links'
                        href='https://www.linkedin.com/in/harshitha-govindaraju/'
                        target='_blank'
                    >
                        <Image
                            className='about-contact-logos'
                            src={linkedin}
                            rounded
                        />
                    </a>
                    <a
                        className='contact-links'
                        href='https://github.com/hg293'
                        target='blank'
                    >
                        <Image
                            className='about-contact-logos'
                            src={github}
                            rounded
                        />
                    </a>

                    <br/><br/>

                    <p className='about-content'>
                        I'm a graduate student at Rutgers University studying Biomedical Engineering.<br/>
                        <hr className='hr-about'/>
                        My area of interest is in applying innovative and advanced engineering methods to biological sciences.<br/> 
                        <hr className='hr-about'/>
                        My vision is to improve the quality of life for humans all over the world. <br/>
                        <hr className='hr-about'/>
                        I'm also passionate about Computer Vision, Deep Learning and Electronics,
                        and their application in medical fields.<br/>
                        {/*<hr className='hr-about'/>
                        <b>Actively seeking full time opportunities in web development beginning in June 2020.</b> */}
                    </p>
                    </ScrollAnimation>
                </Col>
                
            </Row>

        </Container>
    );
}

export default About
