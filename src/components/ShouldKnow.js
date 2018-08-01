import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const shouldKnow = (props) => {
    return (
        <ReponsiveContainer>
            <Header  as='h2' style={{ padding: '1em' }} content='พนักงานควรรู้' />
            <ul>
            	<li><a href = '//drive.google.com/file/d/19lqRY4Dc8u8SJpnivWOTTzY-nS1qTQUy/view?usp=sharing'>คู่มือพนักงานสถาบันกับสิ่งที่พนักงานสถาบันควรู้ในการปฏิบัติงาน-ส่วนกลาง</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1_B_myd-t4H8qSGH7BR0RV_wsTPpok6Vn/view?usp=sharing'>เครืองแบบพนักงานสถาบันและข้าราชการ-เครื่องแบบหน่วยงาน</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1l-gjLqpDZbU9155evM_2kjU7xyikAKuS/view?usp=sharing'>จรรยาบรรณของผู้ปฏิบัติงานในสถาบัน -จรรยาบรรณ</a></li><br />
            	<li><a href = '//drive.google.com/file/d/15hhSYsOhA-0iKjI9lNln4aCQajAGdhie/view?usp=sharing'>ประกาศ วัน เวลา ทำงานและวิธีการลงเวลาทำงาน</a></li><br />
            	<li><a href = '//drive.google.com/file/d/1mU1pOIG-u2uL24zYwz0yD6zgy3joueJu/view?usp=sharingg'>ประกาศ ก.พ.อ. การกำหนดชื่อสาขาวิชาสำหรับการเสนอขอกำหนดตำแหน่งทางวิชาการและการเทียบเคียงสาขาวิชาที่เคยกำหนดไปแล้ว</a></li><br />
           </ul>
        </ReponsiveContainer>
    );
}

export default shouldKnow;