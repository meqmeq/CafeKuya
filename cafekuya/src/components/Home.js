import React from "react";
import imgs from "./Background.js";
import styled from "styled-components"
import {Carousel} from "react-bootstrap"

const Styledimg = styled.img`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    display: block;
    
`;

const listItems = imgs.map((img) => { return (
    <Carousel.Item interval={3000}>
        <Styledimg
        src={img}
        alt="slide"
        />
  </Carousel.Item>
)
    }) 



const Home = () => {
  return (
    // <HeroSection>
    //     <HeroWrapper>
    //         <Title>
    //             Café Kuya
    //         </Title>
    //     </HeroWrapper>
    // </HeroSection>)
    <Carousel fade flex >
  {/* <Carousel.Item>
    <Styledimg
      src={imgs[0]}
      alt="First slide"
    />
  </Carousel.Item> */}
  {listItems}
</Carousel>)
};

export default Home;
