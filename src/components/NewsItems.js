import React from 'react';
import { Item, Grid } from 'semantic-ui-react';
import News from './News';
import img from '../assets/pics/images.png';
import _ from 'lodash';

const newsGroup = (props) => {
    return (
        <Grid.Row centered>
          <Grid.Column width={ 7 }>
            <Item.Group>
                <News title='การป้อนข้อมูลภาระงานสายวิชาการ' date='29' month='7' year='2561' icon='file' link='https://drive.google.com/open?id=1X5AK7829BW8-mydA7odqg0O7ggvj4LI1'></News>
                <News title='ขอเชิญประชุมคณะกรรมการฝ่ายประเมินผู้บริหาร' date='29' month='7' year='2561' icon='file' link='https://drive.google.com/open?id=1MMnMOpOiH_Sb1L5cHOW3uicSbqDa_DVe'></News>
                <News title='ประเมินคุณภาพบุคลากรสายวิชาการ (PBP)' date='29' month='7' year='2561' icon='file' link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV'></News>
                <News title='ประกาศ ก.พ.อ. การกำหนดชื่อสาขาวิชาสำหรับการเสนอขอกำหนดตำแหน่งทางวิชาการและการเทียบเคียงสาขาวิชาที่เคยกำหนดไปแล้ว' date='1' month='8' year='2561' icon='file' link='https://drive.google.com/file/d/1J-OY03WpoPlqQQO-viHKd5Yn1F7smIyv/view?usp=sharing'></News>
                <News title='ประกาศสวัสดิการของพนักงานสถาบันเงินงบประมาณ' date='1' month='8' year='2561' icon='file' link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV'></News>
                <News title='ประกาศ หลักเกณฑ์ วิธีการ และเงื่อนไขการต่อเวลาราชการของข้าราชการพลเรือนในสถาบีนอุดมศึกษา' date='1' month='8' year='2561' icon='file' link=https://drive.google.com/file/d/1O8kW-N-m2WFpK8UfZ9Z8gYYBDMzScqms/view?usp=sharing'></News>
                <News title='ประกาศความสามารถภาษาอังกฤษของพนักงานสถาบัน' date='1' month='8' year='2561' icon='file' link='https://drive.google.com/file/d/1kevfSsHYtO-gVUldMbsdZH_wiLTEswyo/view?usp=sharing'></News>
                <News title='ประกาศ การบริหารงานบุคคลพนักงานสถาบันประเภทพิเศษ' date='1' month='8' year='2561' icon='file' link='https://drive.google.com/file/d/1MnRQFuUvuDXS8l9DOjLiY9tT8Llja9t5/view?usp=sharing'></News>
                <News title='ประกาศ วัน เวลา ทำงานและวิธีการลงเวลาทำงาน' date='1' month='8' year='2561' icon='file' link='https://drive.google.com/file/d/15Sw9ljLVEKxUcHIjnnHYrBu616kAFF59/view?usp=sharing'></News>
                
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
    );
};

export default newsGroup;