import React from 'react';
import {  Header } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const development = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }}content='พัฒนาบุคลากร' />
            <ul>
            	<li><a href = '//drive.google.com/file/d/1eegpe7GZURfanPvt0C0GO6KLf_W9azN3/view?usp=sharing'>หลักเกณฑ์วิธีการคิดภาระงานทางวิชาการของคณาจารย์-ส่วนกลาง</a></li>
            	<li><a href = '//drive.google.com/file/d/1n7AYgOkaWPFROBguXDoxeTHnfu8JWwsY/view?usp=sharing'>ประกาศความสามารถภาษาอังกฤษของพนักงานสถาบัน</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1_6ond2CnIH8QDiL0unIY-inOnEqjBqH8/view?usp=sharing'>ประกาศ การบริหารงานบุคคลพนักงานสถาบัน</a></li><br />
            	<li><a href = '//drive.google.com/file/d/14UYK216Q_kFuQphXx2iEBlzqZOW6NbRv/view?usp=sharing'>ประกาศ หลักเกณฑ์ วิธีการ และเงื่อนไขการ</a></li><br />

           </ul>
        </ReponsiveContainer>
    );
}

export default development;