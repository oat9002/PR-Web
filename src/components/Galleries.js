import React from 'react';
import Gallery from './Gallery';
import { Grid, GridColumn, Image } from 'semantic-ui-react';
import gal1_01 from '../assets/pics/Galleries/Gal1/gal1_01.jpg';
import gal1_02 from '../assets/pics/Galleries/Gal1/gal1_02.jpg';
import gal1_03 from '../assets/pics/Galleries/Gal1/gal1_03.jpg';
import gal1_04 from '../assets/pics/Galleries/Gal1/gal1_04.jpg';
import gal1_05 from '../assets/pics/Galleries/Gal1/gal1_05.jpg';
import gal1_06 from '../assets/pics/Galleries/Gal1/gal1_06.jpg';
import gal1_07 from '../assets/pics/Galleries/Gal1/gal1_07.jpg';
import gal2_01 from '../assets/pics/Galleries/Gal2/gal2_01.jpg';
import gal2_02 from '../assets/pics/Galleries/Gal2/gal2_02.jpg';
import gal2_03 from '../assets/pics/Galleries/Gal2/gal2_03.jpg';
import gal2_04 from '../assets/pics/Galleries/Gal2/gal2_04.jpg';
import gal2_05 from '../assets/pics/Galleries/Gal2/gal2_05.jpg';
import gal2_06 from '../assets/pics/Galleries/Gal2/gal2_06.jpg';
import gal2_07 from '../assets/pics/Galleries/Gal2/gal2_07.jpg';
import gal2_08 from '../assets/pics/Galleries/Gal2/gal2_08.jpg';
import gal2_09 from '../assets/pics/Galleries/Gal2/gal2_09.jpg';
import gal2_10 from '../assets/pics/Galleries/Gal2/gal2_10.jpg';
import gal3_01 from '../assets/pics/Galleries/Gal3/gal3_01.jpg';
import gal3_02 from '../assets/pics/Galleries/Gal3/gal3_02.jpg';
import gal3_03 from '../assets/pics/Galleries/Gal3/gal3_03.jpg';
import gal3_04 from '../assets/pics/Galleries/Gal3/gal3_04.jpg';
import gal3_05 from '../assets/pics/Galleries/Gal3/gal3_05.jpg';
import gal3_06 from '../assets/pics/Galleries/Gal3/gal3_06.jpg';
import gal3_07 from '../assets/pics/Galleries/Gal3/gal3_07.jpg';
import gal3_08 from '../assets/pics/Galleries/Gal3/gal3_08.jpg';
import gal3_09 from '../assets/pics/Galleries/Gal3/gal3_09.jpg';
import gal3_10 from '../assets/pics/Galleries/Gal3/gal3_10.jpg';
import gal3_11 from '../assets/pics/Galleries/Gal3/gal3_11.jpg';
import gal3_12 from '../assets/pics/Galleries/Gal3/gal3_12.jpg';
import gal3_13 from '../assets/pics/Galleries/Gal3/gal3_13.jpg';
import gal3_14 from '../assets/pics/Galleries/Gal3/gal3_14.jpg';
import gal3_15 from '../assets/pics/Galleries/Gal3/gal3_15.jpg';
import gal3_16 from '../assets/pics/Galleries/Gal3/gal3_16.jpg';
import gal3_17 from '../assets/pics/Galleries/Gal3/gal3_17.jpg';
import gal3_18 from '../assets/pics/Galleries/Gal3/gal3_18.jpg';
import gal3_19 from '../assets/pics/Galleries/Gal3/gal3_19.jpg';
import gal3_20 from '../assets/pics/Galleries/Gal3/gal3_20.jpg';


const galleries = (props) => {
    const imgSrc1 = [gal1_01, gal1_02, gal1_03, gal1_04, gal1_05, gal1_06, gal1_07];
    const imgSrc2 = [gal2_01, gal2_02, gal2_03, gal2_04, gal2_05, gal2_06, gal2_07, gal2_08, gal2_09, gal2_10];
    const imgSrc3 = [gal3_01, gal3_02, gal3_03, gal3_04, gal3_05, gal3_06, gal3_07, gal3_08, gal3_09, gal3_10,gal3_11, gal3_12, gal3_13, gal3_14, gal3_15, gal3_16, gal3_17, gal3_18, gal3_19, gal3_20];


    return (
        <Grid.Row centered>
            <GridColumn width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc1[0]} label={{ color: 'orange', content: 'ภาพประชุมบุคลาการใหม่สายสนับสนุนวิชาการ', icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc1 } mobile={ props.mobile }></Gallery>
            </GridColumn>
            <Grid.Column width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc2[0]} label={{ color: 'orange', content: 'ภาพประชุมบุคลาการใหม่สายสนับสนุนวิชาการ', icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc2 }  mobile={ props.mobile }></Gallery>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc3[0]} label={{ color: 'orange', content: `อบรมบุคลากรโครงการสร้างแรงบันดาลใจในการทำงาน`, icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc3 }  mobile={ props.mobile }></Gallery>
            </Grid.Column>
        </Grid.Row>    
    )
}

export default galleries;