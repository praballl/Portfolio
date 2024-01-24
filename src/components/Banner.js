import {useEffect,useState} from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

import hedderImg from '../assets/img/header-img.svg'

const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Front-End Developer","Back-End Developer"]
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(400-(Math.random()*100))
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(() => {
            tick()
        },delta);
        return () => {clearInterval(ticker)}
    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(300);
        }
    }


  return (
    <section className='banner' id='home'>
        <Container className="align-item-center">
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Wellcome to my Portfolio</span>
                    <h1>{`Hi I am a `}<span className='wrap'>{text}</span></h1>
                    <p>Software developer with knowledge of front-end and back-end development. A highly adaptable individual 
                    with a strong passion for staying updated on the latest technologies and continuously expanding their skillset.</p>
                    <a target='_blank' href="mailto:namdevprabal@example.com"><button  >Let's Connect<ArrowRightCircle size={25} /></button></a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={hedderImg} alt='hedder-image' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
