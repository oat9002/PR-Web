import React from 'react';
import Gallery from './Gallery';
import { Grid, GridColumn, Header, Image } from 'semantic-ui-react';
import gal1_01 from '../assets/pics/gal1_01.jpg';
import gal1_02 from '../assets/pics/gal1_02.jpg';
import gal1_03 from '../assets/pics/gal1_03.jpg';
import gal1_04 from '../assets/pics/gal1_04.jpg';
import gal1_05 from '../assets/pics/gal1_05.jpg';
import gal1_06 from '../assets/pics/gal1_06.jpg';
import gal1_07 from '../assets/pics/gal1_07.jpg';
import gal2_01 from '../assets/pics/gal2_01.jpg';
import gal2_02 from '../assets/pics/gal2_02.jpg';
import gal2_03 from '../assets/pics/gal2_03.jpg';
import gal2_04 from '../assets/pics/gal2_04.jpg';
import gal2_05 from '../assets/pics/gal2_05.jpg';
import gal2_06 from '../assets/pics/gal2_06.jpg';
import gal2_07 from '../assets/pics/gal2_07.jpg';
import gal2_08 from '../assets/pics/gal2_08.jpg';
import gal2_09 from '../assets/pics/gal2_09.jpg';
import gal2_10 from '../assets/pics/gal2_10.jpg';

const galleries = (props) => {
    const imgSrc1 = [gal1_01, gal1_02, gal1_03, gal1_04, gal1_05, gal1_06, gal1_07];
    const imgSrc2 = [gal2_01, gal2_02, gal2_03, gal2_04, gal2_05, gal2_06, gal2_07, gal2_08, gal2_09, gal2_10];


    return (
        <Grid.Row centered>
            <GridColumn width={7} textAlign='center'>
                <Header as='h4'>ภาพประชุมบุคลาการใหม่สายสนับสนุนวิชาการ</Header>
                <Image centered size='medium' src={imgSrc1[0]} />
                <br/>
                <Gallery imgSrcs={ imgSrc1 } mobile={ props.mobile }></Gallery>
                <p style={{ padding:'1em' }}>คลิกที่รูปเพื่อดูรูปอื่น ๆ ภายในอัลบัม</p>
            </GridColumn>
            <Grid.Column width={7} textAlign='center'>
                <Header as='h4'>ภาพประชุมบุคลาการใหม่สายวิชาการ</Header>
                <Image centered size='medium' src={imgSrc2[0]} />
                <br/>
                <Gallery imgSrcs={ imgSrc2 }  mobile={ props.mobile }></Gallery>
                <p style={{ padding:'1em' }}>คลิกที่รูปเพื่อดูรูปอื่น ๆ ภายในอัลบัม</p>
            </Grid.Column>
        </Grid.Row>    
    )
}

export default galleries;