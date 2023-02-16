import React from "react";
import { Container, Row } from "reactstrap";
import HomeCard from "../features/home/HomeCard";
import { MEE } from '../app/shared/MEE';

function HomePage() {
  return (
    <Container>
      <Row>
              <HomeCard mee={MEE[1]} />
      </Row>
    </Container>
  );
}

export default HomePage;
