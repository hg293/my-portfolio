import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Element } from 'react-scroll'
import university from '../pictures/lab_logo.png'
import siemens from '../pictures/siemens-logo.png'
import bmc from '../pictures/bmc.jpeg'
import '../styles.css'

function Experience() {
    return (
        <Container className='experience-container' id='Experience' fluid>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='slideInRight'
                        animateOnce={true}
                    >
                        <h1><u>EXPERIENCE</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='slideInLeft'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <a
                                href='http://www.hassan.rutgers.edu/lab_research.html'
                                target='_blank'
                            >
                                <Card.Img variant="top" src={university} />
                                <Card.Body>
                                    <Card.Title><b>Research Assistant</b></Card.Title>
                                    <Card.Text>September 2018 - Present</Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <a
                                href='https://www.siemens-healthineers.com/en-us/molecular-imaging/xspect'
                                target='_blank'
                            >
                                <Card.Img variant="top" src={siemens} />
                                <Card.Body>
                                    <Card.Title><b>Research and Development Intern</b></Card.Title>
                                    <Card.Text>June 2019 - August 2019</Card.Text>
                                </Card.Body>
                            </a>
                            </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4} className='card-container'>
                        <Card className='card-style'>
                            <a
                                href='http://www.bmcri.org/'
                                target='_blank'
                            >
                                <Card.Img variant="top" src={bmc} />
                                <Card.Body>
                                    <Card.Title><b>Biomedical Engineer Apprenticeship</b></Card.Title>
                                    <Card.Text>January 2017 - June 2017</Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </ScrollAnimation>

        </Container>
    )
}

export default Experience
