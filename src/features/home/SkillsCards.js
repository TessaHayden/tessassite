import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { selectAllSkills } from './skillsSlice';
import SkillCard from '../home/SkillCard';


const SkillsCard = () => {
    const skills = selectAllSkills();
    return (
        <Container>
            <Row className='ms-auto'>
                {skills.map((skill) => {
                    return (
                        <Col md='5' className='m-4' key={skill.id}>
                            <SkillCard skill={skill} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default SkillsCard;