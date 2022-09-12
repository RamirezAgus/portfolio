
import React from 'react';
import '../Components/Contact.css'
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import contactImage from "../assets/img/contact.svg"

const Contact = () => {
    const [ state, handleSubmit ] = useForm('mwkzpdnn');

    if(state.succeeded) {
        return <p className='contact' id='connect'>Thanks for message!</p>
    }


    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-center'>
                        <img src={contactImage} alt='contact' />
                    </Col>
                    <Col>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit} action='https://formspree.io/f/mwkzpdnn' method='POST'>
                            <input id='name' type='text' name='name' placeholder='Name' required/>
                            <ValidationError prefix='Name' field='name' errors={state.errors}/>
                            <input id="email" type="email" name="email" placeholder="Email" required/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            <textarea id="message" name="message" placeholder="Message" required/>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                            <button type="submit" disabled={state.submitting}>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact