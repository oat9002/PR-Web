import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const report = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='รายงานข้อมูลสารสนเทศบุคลลากร' /> 
        </ReponsiveContainer>
    );
}

export default report;