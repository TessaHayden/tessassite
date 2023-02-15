import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import MeeDrawing from '../../assets/mee-drawing.svg';
import "../../css/homecard.css";

const HomeCard = () => {
  
  

  return (
    <Card className="mee-card">
      <CardImg width='100%' src={MeeDrawing} alt='Tessa' />
      <CardTitle>Goal</CardTitle>
    </Card>
  );
};

export default HomeCard;
