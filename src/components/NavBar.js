import { useState,useEffect } from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';

import code from '../assets/img/code.png' 
import navIcon1 from '../assets/img/nav-icon1.svg' 
import twitter from '../assets/img/twitter.png' 
import navIcon3 from '../assets/img/nav-icon3.svg' 

function NavBar() {
  const [activeLink,setActiveLink] = useState('home')
  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY>50){
        setScrolled(true);
      } else {
        setScrolled(false)
      }
      window.addEventListener('scroll',onScroll)
    }
    return ()=> window.addEventListener('scroll',onScroll);
  })
  const onUpdateLink = (value)=>{
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" >
            <img className='code-logo' src={code} alt='logo'/>
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'>

            </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link' }onClick={()=>onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                    <a target='_blank' href='https://www.linkedin.com/in/prabal-namdeo-79ba48240/'><img src={navIcon1} alt='' /></a>
                    <a target='_blank' href='https://x.com/praaballl?s=11'><img src={twitter} alt='' /></a>
                    <a target='_blank' href='https://www.instagram.com/broke_codez?igsh=YjllbXZ2bTlkMG1x'><img src={navIcon3} alt='' /></a>
                </div>



            <a target='_blank' href="mailto:namdevprabal@example.com">
            <button className='vvd'  >
              <span>Let's Connect</span>
            </button>
            </a>
            <a target='_blank' href='https://drive.google.com/file/d/1AUh7uHmxYXYMvRYgP3r1cnMXXP3mL0Yb/view?usp=sharing'>
            <button className='vvd'  >
              <span>Resume</span>
            </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;