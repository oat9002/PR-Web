import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const observance = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='นักศึกษาติดต่อเข้าฝึกงาน/ผู้สนใจติดต่อเข้าศึกษาดูงานกองทรัพยากรบุคคล' /> 
        </ReponsiveContainer>
    );
}

export default observance;