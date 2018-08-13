import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const budget = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='ทุน' /> 
        </ReponsiveContainer>
    );
}

export default budget;