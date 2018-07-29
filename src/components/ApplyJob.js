import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const applyJob = (props) => {
    return (
        <ReponsiveContainer >
        <Header as='h2' style={{ padding: '1em' }} content='สมัครงาน' />
			<ul>
				<li><a href = '//drive.google.com/file/d/10EzLsJfilKTdqUvHOJFBVfHWYcTNkd3F/view?usp=sharing'>ใบสมัครสอบแข่งขัน-พร้อมกรอก สายสนับสนุนวิชาการ</a></li><br />
				<li><a href = '//drive.google.com/file/d/1INlly3f0SQQaQQbk5sIIbpUZHkcA5DI7/view?usp=sharing'>ใบสมัครสอบคัดเลือก-อาจารย์</a></li><br />
				<li><a href = '//drive.google.com/file/d/1Y_81kLcFOrT290PeXd1_Qb2TGCqG3rrb/view?usp=sharing'>ประกาศรับสมัคร-สายสนับสนุน-เพิ่มเติม  (new)</a></li><br />
				<li><a href = '//drive.google.com/file/d/1hyQK7yZBYA-dhe1V8fvC6gUDQFD_KyBg/view?usp=sharing'>ประกาศรับสมัคร-สายสนับสนุน-เพิ่มเติม-2  (new)</a></li><br />
				<li><a href = '//drive.google.com/file/d/1KI4hURBT5Q2f6zRpU4UbH36knfoFeWy7/view?usp=sharing'>ประกาศสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง-สายวิชาการ-ครั้งที่-2-2561  (new)</a></li>
			</ul>
        </ReponsiveContainer>
    );
}

export default applyJob;