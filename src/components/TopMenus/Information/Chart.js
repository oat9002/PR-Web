import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const chart = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='แผนภาพและข้อมูลแสดงการกระจายอายุของบุคลลากร' /> 
        </ReponsiveContainer>
    );
}

export default chart;