import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import '../styles.css'

function Education() {
    return (
        <Container id='Education' className='education-container'>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='slideInLeft'
                        animateOnce={true}
                    >
                        <h1><u>EDUCATION</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='slideInLeft'
                animateOnce={true}
            >
                <Row className={'pt-5 education-sub-section'}>
                    <Col xs={12} md={6}>
                        <p className='education-sub-header'>
                            <b>Rutgers, The State University of New Jersey</b>
                        </p>

                        <p>
                            MS in Biomedical Engineering<br/>
                            2018 - 2020<br/>
                        </p>
                        <br/>
                        <Col md={12} className='padding-coursework'>
                            <p className='coursework-header'>
                                <b>Relevant Coursework</b>
                            </p>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Mathematical Modelling in Biological Systems</ListGroup.Item>
                                <ListGroup.Item>Bio Imaging Methods</ListGroup.Item>
                                <ListGroup.Item>Bio Signal and Bio Image Processing</ListGroup.Item>
                                <ListGroup.Item>Artificial Implants</ListGroup.Item>
                                <ListGroup.Item>Fundamentals of Regulatory Affairs</ListGroup.Item>
                                <ListGroup.Item>Biocontrol Systems</ListGroup.Item>
                                <ListGroup.Item>Mammalian Physiology</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Col>

                    <Col xs={12} md={6}>
                        <p className='education-sub-header'>
                            <b>RNS Institute of Technology, Affiliated to Visveshwaraiah Technological University</b>
                        </p>
                        <p>
                            BE in Electronics and Communication Engineering<br/>
                            2013 - 2017<br/>
                        </p>
                        <br/>
                        <Col md={12}>
                            <p className='coursework-header'>
                                <b>Relevant Coursework</b>
                            </p>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>C/C++ Programming</ListGroup.Item>
                                <ListGroup.Item>Digital Signal Processing, Signals and Systems</ListGroup.Item>
                                <ListGroup.Item>Image Processing Methods</ListGroup.Item>
                                <ListGroup.Item>Computer Communication Networks</ListGroup.Item>
                                <ListGroup.Item>Optical Fiber Communications</ListGroup.Item>
                                <ListGroup.Item>Digital Communication</ListGroup.Item>
                                <ListGroup.Item>Microprocessors</ListGroup.Item>
                                <ListGroup.Item>DSP Algorithms and Architecture</ListGroup.Item>
                                <ListGroup.Item>Network Security </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </Col>
                </Row>
            </ScrollAnimation>

        </Container>
    )
}

export default Education
