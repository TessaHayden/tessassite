import React from "react";
import { Container, Row } from "reactstrap";
import HomeCard from "../features/home/HomeCard";

function HomePage() {
  return (
    <Container>
      <Row>
        <HomeCard />
      </Row>
    </Container>
  );
}

export default HomePage;
