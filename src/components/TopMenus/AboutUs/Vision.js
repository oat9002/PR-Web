import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../../../container/ResponsiveContainer';

const vision = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='วิสัยทัศน์ พันธกิจ ภารกิจ' /> 
        </ReponsiveContainer>
    );
}

export default vision;