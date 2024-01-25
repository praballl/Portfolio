import React from 'react'
import { Container,Row,Col, Tab } from 'react-bootstrap'

import ProjectCards from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'
import youtubeImg from '../assets/img/youtubeImg.png'
import portfolioImg from '../assets/img/portfolioImg.png'
import dailyJournalImg from '../assets/img/dailyJournalImg.png'


const Projects = () => {
    const projects = [
        {title : "YouTube2.0",
        imgUrl : youtubeImg ,
        sourceCode :'https://github.com/praballl/YouTube2.0.git',
        liveLink :'https://65a8f323d04dd15ff57a5bc4--creative-pasca-2b003c.netlify.app/'
        },

        {title : "Portfolio",
        imgUrl : portfolioImg ,
        sourceCode : 'https://github.com/praballl/Portfolio.git',
        liveLink : ''
        },
        {title : "Daily Journal",
        imgUrl : dailyJournalImg ,
        sourceCode : 'https://github.com/praballl/Blog-demo.git',
        liveLink : 'https://clipchamp.com/watch/l5ITLa7hSdc'
        },
        
    ]
  return (
    <section className='project' id='projects'>
        <Container>
            <Row className='align-item-center'>
                <Col>
                <h2>Projects</h2>
                <p>I have endeavored to create a project that is both responsive and quick-loading, while also delivering optimal performance.</p>
                <br />
                <Tab.Container id="project-tabs" defaultActiveKey='first'>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project,index)=>
                                    (
                                        <ProjectCards key={index} title={project.title} sourceCode={project.sourceCode} liveLink={project.liveLink}  imgUrl = {project.imgUrl} />
                                    )
                                    )
                                }
                            </Row>

                        </Tab.Pane>
                        
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}

export default Projects
