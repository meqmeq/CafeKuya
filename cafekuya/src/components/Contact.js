import React from "react";
import {Instagram} from "@styled-icons/icomoon/Instagram"
import {FacebookSquare} from "@styled-icons/boxicons-logos/FacebookSquare"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap";
import ButtonMailto from "./ButtonMailto.js"
import { BrowserRouter as Router}  from "react-router-dom";

const StyledContainer = styled(Container)`
    width: 100%;
    height: 100vh;
    text-align: center;
    font-family: Bantayog;
`
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

const Contact = () => {

    return(
        <>
        
        <StyledContainer>
            <Row style={{textAlign:"center"}} className='h-5'>
                <Col><h1>Contact</h1></Col>
                </Row>
            <Row style={{justifyContent:"center", alignItems:'center'}} className='h-95'>
                <Col>
                <Row style={{}}><h2>Address</h2></Row>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.6141346979057!2d-73.49226688487624!3d45.45743127910084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90f5c8d88870b%3A0xa3218400b21689f0!2sCaf%C3%A9%20Kuya!5e0!3m2!1sen!2sca!4v1631039359246!5m2!1sen!2sca" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                <h2>Email:  </h2> <h2>cafekuya.mtl@gmail.com</h2>
                <Router>
                <ButtonMailto label="Write me an E-Mail" mailto="mailto:cafekuya.mtl@gmail.com" />
                </Router>
            </Col>
            <Col className='justify-content-center'>
            <Instagram size="50" onClick={()=>openInNewTab('https://www.instagram.com/cafe.kuya/?hl=en')}/>
            <FacebookSquare size="66" onClick={()=>openInNewTab('https://www.facebook.com/cafe.kuya/')}/>
            
            <Row><h2>Business Hours</h2></Row>
            <Row><p>Mon:	Closed</p></Row>
            <Row><p>Tue:	7:00 AM – 3:00 PM</p></Row>
            <Row><p>Wed:	7:00 AM – 3:00 PM</p></Row>
            <Row><p>Thu:	7:00 AM – 3:00 PM</p></Row>
            <Row><p>Fri:	7:00 AM – 3:00 PM</p></Row>
            <Row><p>Sat:	9:00 AM – 4:00 PM</p></Row>
            <Row><p>Sun:	Closed</p></Row>

            
            </Col>
            </Row>
        </StyledContainer>
        
        </>
    
    )
}


export default Contact