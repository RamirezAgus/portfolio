import React from 'react';
import '../Components/MainContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const MainContainer = () => {




    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-item-center justify-content-center wrap'>
                    <Col xs={12} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio!</span>
                        <div className='d-flex justify-content-center flex-wrap'>
                            <span className='cmd d-flex'>&gt;<span className='text'>
                            <Typewriter 
                                options={{
                                autoStart: true,
                                loop: true,
                                delay: 'natural',
                                strings:[
                                    "_"
                                ]}}
                            />
                            </span></span>
                            <h1>Hi, I'm Agus</h1>
                        </div>
                        <p>
                            I am a front end developer and looking for my first experience as a web developer. 
                            I consider having a diverse profile, allowing me to have a broader vision in the different 
                            disciplines assigned to me. Curious about design in all areas and characterized by paying 
                            attention to details.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MainContainer