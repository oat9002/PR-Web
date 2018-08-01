import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const welfare = (props) => {
    return (
        <ReponsiveContainer>
            <Header as='h2' style={{ padding: '1em' }} content='สวัสดิการ' />
            <ul>
            	<li><a href = '//drive.google.com/file/d/1qTvd8Y1hzK1CiIPBNgmAZqdDNgUThbQn/view?usp=sharing'>แบบฟอร์มการลา- แบบฟอร์ม</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1P6VL9NmvUsM009IGv0naE3jFHx5PLfHM/view?usp=sharing'>สวัสดิการและสิทธิประโยชน์ของพนักงานสถาบัน-สวัสดิการ</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1JMY_OI_FE530ZFZEOJM1NE2m4vKE15GC/view?usp=sharing'>สิทธิการลาประเภทต่าง ๆ- การลา</a></li><br />
            	<li><a href = '//drive.google.com/file/d/138O0KDqEoCXTBDZxhtuLlSF0Nb2tgyHT/view?usp=sharing'>ประกาศสวัสดิการของพนักงานสถาบันเงินงบประมาณ</a></li><br />
           </ul>
        </ReponsiveContainer>
    );
}

export default welfare;