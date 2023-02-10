import React from 'react';
import { MEE } from '../../shared/MEE';
import { Col, Row } from 'reactstrap';
import HomeCard from './HomeCard';

const MeesList = () => {
    return (
        <Row className='ms-auto'>
            {MEE.map((mee) => { return (<Col md='5' className='m-4' key={mee.id}><HomeCard mee={mee} /></Col>); })}
        </Row>
    );
};

export default MeesList;

