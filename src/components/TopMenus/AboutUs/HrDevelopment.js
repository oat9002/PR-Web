import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const hrDevelopment = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='งานยุทธศาสตร์และพัฒนาระบบบริหารทรัพยากรบุคคล' /> 
        </ReponsiveContainer>
    );
}

export default hrDevelopment;