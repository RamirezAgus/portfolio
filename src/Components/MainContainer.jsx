import React from 'react';
import '../Components/MainContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const MainContainer = () => {

const { t } = useTranslation();


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-item-center justify-content-center wrap'>
                    <Col xs={12} xl={7}>
                        <span className='tagline'>{t('welcome')}</span>
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
                            </span>
                            </span>
                            <h1>{t('hello')}</h1>
                        </div>
                        <p className='description'>{t('desc')}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MainContainer