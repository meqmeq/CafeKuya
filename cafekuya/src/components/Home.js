import React from "react";
import {
  Row,
  Container,
  Col,
  Image,
  Carousel,
  Item,
  Caption,
} from "react-bootstrap";
import image from "../images/cafeBackground.jpg";
const Home = () => {
  return (
    // <Container
    //   style={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     width: "100h",
    //     textAlign: "center",
    //   }}
    //   className="container-fluid no-padding"
    // >
    //   <Col style={{ textAlign: "center" }}>
    //     <Row>
    //       <p style={{ color: "red" }}>Hello</p>
    //     </Row>
    //   </Col>
    // </Container>

    <Carousel fade fluid>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
          style={{ height: "100%" }}
        />
        <Carousel.Caption className="justify-content-center align-middle">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
