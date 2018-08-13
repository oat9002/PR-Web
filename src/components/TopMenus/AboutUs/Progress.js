import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../../../container/ResponsiveContainer';

const progress = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='งานความก้าวหน้าในสายงานวิชาการและสนับสนุน' /> 
        </ReponsiveContainer>
    );
}

export default progress;