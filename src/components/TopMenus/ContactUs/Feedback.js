import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const feedback = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='ส่งคำถาม/ข้อเสนอแนะ' /> 
        </ReponsiveContainer>
    );
}

export default feedback;