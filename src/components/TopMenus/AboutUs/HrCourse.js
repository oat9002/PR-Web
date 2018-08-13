import React from 'react';
import { Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const hrCourse = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='หลักสูตรโครงสร้างการพัฒนาทรัพยากรบุคคล' /> 
        </ReponsiveContainer>
    );
}

export default hrCourse;