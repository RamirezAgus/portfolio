import React from 'react';
import '../Components/Projects.css'
import { Col } from 'react-bootstrap';
import PropTypes from "prop-types";



export const ProjectCard = ({ title, description, imgUrl, url }) => {

    return (
        <Col md={4}>
            <a href={url} target='_blank' rel='noreferrer'>
                <div className='proj-imgbx'>
                    <img src={imgUrl} alt='imgProj' />
                    <div className='proj-txt'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    url: PropTypes.string
}

