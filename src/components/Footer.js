import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import code from '../assets/img/code.png' 
import navIcon1 from '../assets/img/nav-icon1.svg' 
import navIcon3 from '../assets/img/nav-icon3.svg' 
import twitter from '../assets/img/twitter.png' 

const Footer = () => {
  return (
    <footer className='footer'>
        <Container className='con'>
            <Row >
                <Col sm={6}>
                    <img href="#home" src={code}  alt='logo-image'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end' >
                    
                    <div className='social-icon'>
                    <a target='_blank' href='https://www.linkedin.com/in/prabal-namdeo-79ba48240/'><img src={navIcon1} alt='' /></a>
                    <a target='_blank' href='https://x.com/praaballl?s=11'><img src={twitter} alt='' /></a>
                    <a target='_blank' href='https://www.instagram.com/broke_codez?igsh=YjllbXZ2bTlkMG1x'><img src={navIcon3} alt='' /></a>
                    </div>
                </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer
