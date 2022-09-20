import React from 'react';
import '../Components/Projects.css'
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import mScope from '../assets/img/mscope.png'
import annette from '../assets/img/annette.png'
import adige from '../assets/img/adige.png'
import { useTranslation } from 'react-i18next';




const Projects = () => {

    const { t } = useTranslation();

    const project = [
        {
            id: 1,
            title: "MusicScope",
            description: "Website developed for the sale of musical instruments, audio and accessories.",
            imgUrl: mScope,
            url: "https://music-scope.netlify.app"
        },
        {
            id: 2,
            title: "Adige Web",
            description: "Website of the Argentine band Adige, listen to them!",
            imgUrl: adige,
            url: "https://adige-web.netlify.app"
        },
        {
            id: 3,
            title: "Annette-tramas",
            description: "An e-commerce website made for the Coderhouse javascript course",
            imgUrl: annette,
            url: "https://annette-site.netlify.app"
            
        }
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>{t('projectTree')}</h2>
                        <p>{t('projectP')}</p>
                        <Row>
                            {
                             project.map((project, index) => {
                                return(
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                             })
                            }
                        </Row>
                        <p>{t('projectPh')}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects