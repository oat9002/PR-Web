import React from 'react';
import Gallery from './Gallery';
import { Grid, GridColumn, Image } from 'semantic-ui-react';
import { importImages } from '../Utils';

const galleries = (props) => {
    const imgSrc1 = importImages(require.context('../assets/pics/Galleries/Gal1', false, /\.(png|jpe?g|svg)$/));
    const imgSrc2 = importImages(require.context('../assets/pics/Galleries/Gal2', false, /\.(png|jpe?g|svg)$/));
    const imgSrc3 = importImages(require.context('../assets/pics/Galleries/Gal3', false, /\.(png|jpe?g|svg)$/));

    return (
        <Grid.Row centered>
            <GridColumn width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc1['gal1_01.jpg']} label={{ color: 'orange', content: 'ภาพประชุมบุคลาการใหม่สายสนับสนุนวิชาการ', icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc1 } mobile={ props.mobile }></Gallery>
            </GridColumn>
            <Grid.Column width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc2['gal2_01.jpg']} label={{ color: 'orange', content: 'ภาพประชุมบุคลาการใหม่สายสนับสนุนวิชาการ', icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc2 }  mobile={ props.mobile }></Gallery>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
                <Image centered size='medium' src={imgSrc3['gal3_01.jpg']} label={{ color: 'orange', content: `อบรมบุคลากรโครงการสร้างแรงบันดาลใจในการทำงาน`, icon: 'picture', ribbon: true }}/>
                <br/>
                <Gallery imgSrcs={ imgSrc3 }  mobile={ props.mobile }></Gallery>
            </Grid.Column>
        </Grid.Row>    
    )
}

export default galleries;