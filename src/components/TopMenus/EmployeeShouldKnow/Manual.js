import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../../../container/ResponsiveContainer';

const manual = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='คู่มือพนักงาน' /> 
        </ReponsiveContainer>
    );
}

export default manual;