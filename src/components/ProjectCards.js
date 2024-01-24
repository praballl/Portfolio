import React from 'react'
import {Col} from 'react-bootstrap'

const ProjectCards = ({title,imgUrl,sourceCode,liveLink}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt='project-img' />
            <div className='proj-txtx'>
                 <a target='_blank' href={sourceCode}><p>sourcecode</p></a>
                <a target='_blank' href={liveLink}> <h4 style={{color:'#fff'}}>live project</h4></a>
                {/* <span >
                    {descripton}
                </span> */}
            
            </div>
            
        </div>
        <h4>{title}</h4>
        
            
    </Col>
    
  )
}

export default ProjectCards
