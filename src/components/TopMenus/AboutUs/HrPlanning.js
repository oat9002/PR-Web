import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const hrPlanning = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล (PDF)' /> 
        </ReponsiveContainer>
    );
}

export default hrPlanning;