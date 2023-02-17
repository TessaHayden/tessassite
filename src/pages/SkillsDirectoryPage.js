import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkillsCards from '../features/home/SkillsCards';
import SkillsDetail from '../features/home/SkillsDetail';
import { selectSkillById } from '../features/home/skillsSlice';

const SkillsDirectoryPage = () => {
    

    const [skillId, setSkillId] = useState(0);
    const selectedSkill = selectSkillById(skillId);

    return (
        <Container>
            
            <Row>
                <Col sm='5' md='7'>
                    <SkillsCards setSkillId={setSkillId} />
                </Col>
                <Col sm='7' md='5'>
                    <SkillsDetail skill={selectedSkill} />
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsDirectoryPage;