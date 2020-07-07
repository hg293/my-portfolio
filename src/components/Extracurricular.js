import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container, Row, Col, Image } from 'react-bootstrap'


function Extracurricular(){
    return(
        <Container id='Extracurricular' className='extracurricular-container'>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='zoomIn'
                        animateOnce={true}
                    >
                        <h1><u>Extracurricular Activities</u></h1>
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
                            <b> Dancing </b>
                        </p>
                        <p>
                            I have always been passionate about dancing ever since I could learn to understand musicality and rythm!</br>
                            I have been trained under India's premier academy- Shiamak Davar Institute of Performing Arts <br/>
                            Also a Certified Zumba Instructor
                        </p>
    )

}