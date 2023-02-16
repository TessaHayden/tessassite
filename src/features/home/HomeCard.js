import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import MeeDrawing from '../../assets/mee-drawing.svg';
import "../../css/homecard.css";

const HomeCard = ({ mee }) => {
  const { image, name, goals } = mee;

  return (
    // probably cleanup CSS 
    <Card className="mee-card" style={{ width: '20rem' }}>
      <CardImg width='100%' src={mee.image} alt={mee.goals} />
      <CardTitle>{mee.goals}</CardTitle>
    </Card>
  );
};

export default HomeCard;
