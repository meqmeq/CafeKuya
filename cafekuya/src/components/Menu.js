import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import styled from "styled-components"


const StyledContainer = styled(Container)`
    width: 100%;
    height: 100vh;
    font-family: Bantayog;

    text-align: center;

`
const MenuWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

`

const MenuSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    display: flex;
    
   
`;

const Menu = () => {
    return (
        <>
        <StyledContainer>
            <Row style={{display: 'fluid', width: '100%', height: '3rem'}}>
                <Col>
                <h1 style={{fontSize: '2rem'}}>Menu</h1>
                </Col>
            </Row>
            <Row style={{display: 'fluid'}}>
                <Col>
                
                </Col>
            </Row>
        </StyledContainer>
        </>
    )
}

export default Menu; 