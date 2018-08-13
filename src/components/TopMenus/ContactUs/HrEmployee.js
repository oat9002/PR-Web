import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../../../container/ResponsiveContainer';

const hrEmployee = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='ติดต่อบุคคลากรทรัพยากรบุคคล' /> 
        </ReponsiveContainer>
    );
}

export default hrEmployee;