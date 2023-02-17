import React from 'react';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const SkillsDetail = ({ skill }) => {
    const { image, skillid, description } = skill;
    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={description} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default SkillsDetail;