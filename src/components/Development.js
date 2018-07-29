import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const development = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }}content='พัฒนาบุคลากร' />
            <ul>
            	<li><a href = '//drive.google.com/file/d/1eegpe7GZURfanPvt0C0GO6KLf_W9azN3/view?usp=sharing'>หลักเกณฑ์วิธี่การคิดภาระงานทางวิชาการของคณาจารย์-ส่วนกลาง</a></li>
           </ul>
        </ReponsiveContainer>
    );
}

export default development;