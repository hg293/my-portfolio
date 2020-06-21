import React from 'react'
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import c from '../pictures/c_programming.jpg'
import cplus from '../pictures/cplus.png'
import r from '../pictures/r-prog-logo.jpeg'
import python from '../pictures/python.png'
import tensor from '../pictures/tensorflow-logo.jpeg'
import pytorch from '../pictures/pytorch-logo.png'
import keras from '../pictures/keras-logo.png'
import sci from '../pictures/scikit-logo.png'
import pydicom from '../pictures/pydicom-logo.png'
import numpy from '../pictures/numpy_python.jpeg'
import pandas from '../pictures/pandas_python.png'

import labv from '../pictures/labview-logo.png'
import matlab from '../pictures/matlab-logo.jpeg'
import multism from '../pictures/NI-multism-logo.jpeg'
import math from '../pictures/mathematica-logo.jpeg'
import imageJ from '../pictures/imageJ-logo.png'
import cad from '../pictures/solidworks-logo.png'


import windows from '../pictures/windows-logo.png'
import mac from '../pictures/mac-logo.jpeg'
import linux from '../pictures/linux-logo.jpeg'

import '../styles.css'
import { logDOM } from '@testing-library/react'

function Skills() {
    return (
        <Container className={'skill-container'} id='Skills'>
            <Row>
                <Col className='section-header' xs={12}>
                    <ScrollAnimation
                        animateIn='slideInLeft'
                        animateOnce={true}
                    >
                        <h1><u>SKILLS</u></h1>
                    </ScrollAnimation>
                </Col>
            </Row>

            <ScrollAnimation
                animateIn='slideInLeft'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} className='padding-section padding-skills-right'>
                        <h3>Computer Programming Language</h3><br/>
                        <Image
                            className='skills-img'
                            src={c}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={cplus}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={r}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={python}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={tensor}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={pytorch}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={keras}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={pydicom}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={numpy}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={pandas}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={sci}
                            rounded
                        />

                    </Col>
                </Row>
            </ScrollAnimation>        

            <ScrollAnimation
                animateIn='slideInRight'
                animateOnce={true}
            >
                <Row className={'pt-5'}>
                    <Col xs={12} className={'padding-section padding-skills-left padding-skills-top'}>
                        <h3>Simulation Softwares</h3><br/>
                        <Image
                            className='skills-img'
                            src={matlab}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={math}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={labv}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={multism}
                            rounded
                        />

                        {/* <Image
                            className='skills-img'
                            src={math}
                            rounded
                        /> */}

                        <Image
                            className='skills-img'
                            src={cad}
                            rounded
                        />
                        <Image
                            className='skills-img'
                            src={imageJ}
                            rounded
                        />                       

                    </Col>
                </Row>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn='slideInLeft'
                animateOnce={true}>
                <Row className={'pt-5'}>
                    <Col xs={12} className={'padding-section padding-skills-left padding-skills-top'}>
                        <h3>Operating System</h3><br/>
                        <Image
                            className='skills-img'
                            src={windows}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={mac}
                            rounded
                        />

                        <Image
                            className='skills-img'
                            src={linux}
                            rounded
                        />
                    </Col>   

                </Row>
            </ScrollAnimation>
        </Container>
    )
}

export default Skills
