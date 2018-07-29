import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const welfare = (props) => {
    return (
        <ReponsiveContainer>
            <Header inverted as='h2' content='สวัสดิ์การ' />

            <a href = '//drive.google.com/file/d/1qTvd8Y1hzK1CiIPBNgmAZqdDNgUThbQn/view?usp=sharing'>แบบฟอร์มการลา- แบบฟอร์ม</a>
            <a href = '//drive.google.com/file/d/1P6VL9NmvUsM009IGv0naE3jFHx5PLfHM/view?usp=sharing'><br />สวัสดิการและสิทธิประโยชน์ของพนักงานสถาบัน-สวัสดิการ</a>
            <a href = '//drive.google.com/file/d/1JMY_OI_FE530ZFZEOJM1NE2m4vKE15GC/view?usp=sharing'><br />สิทธิการลาดประเภทต่าง ๆ-การลา</a>
           
        </ReponsiveContainer>
    );
}

export default welfare;