import {useState} from 'react'
import { Row,Col,Container } from 'react-bootstrap'

import contactImg from '../assets/img/contact-img.svg'

const Contact = () => {
    const formInitialDetails = {
        firstName : '',
        lastName : '',
        email : '',
        phnNo : '',
        message : ''

    }
    const [formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttonText,setButtonText] = useState('Send')
    const [status,setStatus] = useState({})
    const onFormUpdate = (categery,value)=>{
        setFormDetails({
        ...formDetails,
        [categery]: value
    })
    }
    const handelSubmit = ()=>{

    }


  return (
    <section className='contact' id='connect'>
        <Container>
        <Row className='align-items-center'>
            <Col md={6}>
                <img src={contactImg} alt="contact-image" />
            </Col>
            <Col md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={handelSubmit}>
                    <Row>
                        <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                        </Col>
                        
                        <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                        </Col>

                        <Col sm={6} className='px-1'>
                            <input type='email' value={formDetails.email} placeholder='Email' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                        </Col>


                        <Col sm={6} className='px-1'>
                            <input type='tel' value={formDetails.phnNo} placeholder='Phone number' onChange={(e)=>onFormUpdate('phnNo',e.target.value)}/>
                        </Col>
                        
                        <Col sm={6} className='px-1'>
                        <textarea rows='6' value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                        
                        <button type='submit'><span>{buttonText}</span></button>
                        </Col>
                        {status.message &&
                        <Col>
                            <p className={status.success === false ? 'danger' : 'success' }>{status.message}</p>
                        </Col>
                        
                        }
                    </Row>
                </form>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Contact
