import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import MEE from '../../shared/MEE.js';
import '../../css/homecard.css';

const HomeCard = (props) => {
    
    return (
      <Card className="mee-card">
        <CardImg width="100%" src={props.mee.image} alt={props.mee.goals} />
       
          <CardTitle >{props.mee.name}</CardTitle>
        
      </Card>
    );
}

export default HomeCard;