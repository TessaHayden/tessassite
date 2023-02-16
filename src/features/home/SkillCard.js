import React from 'react';
import { Card, CardImg, CardTitle, Button } from 'reactstrap';

const SkillCard = (props) => {
    return (
        <Card>
            <CardImg width='100%' src={props.skill.image} alt={props.skill.description} />
            <CardTitle>{props.skill.description}</CardTitle>
        </Card>
    );
};

export default SkillCard;