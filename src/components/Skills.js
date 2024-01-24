import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import { Container} from 'react-bootstrap'

import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

import htmlLogo from '../assets/img/html-5.png'
import cssLogo from '../assets/img/css-3.png'
import jsLogo from '../assets/img/js.png'
import rectLogo from '../assets/img/reactLogo.png'
import nodeLogo from '../assets/img/nodeJs.png'
import ExpressLogo from '../assets/img/express.png'
import mongoLogo from '../assets/img/mongoImg.png'
import sqlLogo from '../assets/img/sqlImg.png'



const Skills = () => {
      return (
        <section className="skill" id="skills">
            <img className="background-image-right" src={colorSharp2} alt="Image" />
            <Container style={{
              backgroundColor:'black',
             marginTop:'60px',
             borderRadius: '30px',
             padding: '8% 0' }}>
              <h2  className='text-center'>Skills</h2>
              <br></br>
            <div className="row">
              <div className="col-md-6 text-center">
                {/* Content for the first column in the first row */}
                <h2>Front-End</h2>
                {/* <p>This is the content of the first column in the first row.</p> */}
                <div >
                    <a ><img style={{width:'60px'}} src={htmlLogo} alt='' /></a>
                    <a ><img style={{width:'60px'}} src={cssLogo} alt='' /></a>
                    <a ><img style={{width: '60px'}} src={jsLogo} alt='' /></a>
                    <a ><img style={{width: '60px', paddingTop:'10px'}} src={rectLogo} alt='' /></a>
                    </div>
              </div>
              <div className="col-md-6 text-center">
                
                <h2>Back-End</h2>
                    <a><img style={{width:'60px'}} src={nodeLogo} alt='' /></a>
                    <a ><img style={{width:'60px'}} src={ExpressLogo} alt='' /></a>
                    <a ><img style={{width:'60px'}} src={mongoLogo} alt='' /></a>
                    <a ><img style={{width:'50px'}} src={sqlLogo} alt='' /></a>
              </div>
            </div>

            
            
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
    }

export default Skills
