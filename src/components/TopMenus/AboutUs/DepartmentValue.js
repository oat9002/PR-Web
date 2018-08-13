import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const dapartmentValue = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='ค่านิยมองค์กร' /> 
        </ReponsiveContainer>
    );
}

export default dapartmentValue;