import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import SkillsCards from '../features/home/SkillsCards';
import SkillsDetail from '../features/home/SkillsDetail';
import { selectRandomSkill } from '../features/home/skillsSlice';

const SkillsDirectoryPage = () => {

    let selectedSkill = selectRandomSkill();

    const toggleSkill = () => {
        selectedSkill = selectRandomSkill();
        console.log(selectedSkill);
    }
    return (
        <Container>
            <Button onClick={() => toggleSkill()}>Select Random Skill</Button>
            <Row>
                <Col sm='5' md='7'>
                    <SkillsCards />
                </Col>
                <Col sm='7' md='5'>
                    <SkillsDetail skill={selectedSkill} />
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsDirectoryPage;