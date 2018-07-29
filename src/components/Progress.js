import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import ReponsiveContainer from '../container/ResponsiveContainer';

const progress = (props) => {
    return (
        <ReponsiveContainer>
           <Header inverted as='h2' content='ความก้าวหน้า' />

            <a href = '//drive.google.com/file/d/1_e7mm4U_fiYz8UvHTcnkoN893E3yUDhu/view?usp=sharing'>ความก้าวหน้าในสายอาชีพ-การเข้าสู่ตำแหน่งทางวิชาการ  (new)</a>
            <a href = '//drive.google.com/file/d/1fpIsyXgJ10MNsu4t0sbUTbN1e2UwTLsH/view?usp=sharing'><br />มาตรฐานภาระงานทางวิชาการของผู้ดำรงตำแหน่งทางวิชาการ-ระเบียบ-ข้อบังคับ  (new)</a>
            <a href = '//drive.google.com/file/d/1FOVRYeEgY-BgeB8HLJIQgz4OuYWnsrFp/view?usp=sharing'><br />หลักเกณฑ์วิธีการพิจารณาแต่งตั้งให้ดำรงตำแน่งทางวิชาการ ปี 2560 -ระเบียบ-ข้อบังคับ  (new)</a>
            

        </ReponsiveContainer>
    );
}

export default progress;