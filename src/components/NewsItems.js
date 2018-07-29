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
                <News title='ขอเชิญประชุมคณะกรรมการฝ่ายปริเมิณผู้บริหาร' date='29' month='7' year='2561' icon='file' link='https://drive.google.com/open?id=1MMnMOpOiH_Sb1L5cHOW3uicSbqDa_DVe'></News>
                <News title='ประเมิณคุณภาพบุคลากรสายวิชาการ (PBP)' date='29' month='7' year='2561' icon='file' link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV'></News>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
    );
};

export default newsGroup;