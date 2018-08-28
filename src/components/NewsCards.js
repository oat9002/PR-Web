import React from 'react';
import { Grid } from 'semantic-ui-react';
import News from './News';
import { importImages } from '../Utils';

const newsCards = (props) => {
    const images = importImages(require.context('../assets/pics/News', false, /\.(png|jpe?g|svg)$/));
    const newsWidth = 5;

    return (
        <Grid>
            <Grid.Row centered>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ วัน เวลา ทำงานและวิธีการลงเวลาทำงาน' 
                        date='1' 
                        month='8'
                        year='2561' 
                        imgSrc={ images['new01.jpg'] }
                        link='https://drive.google.com/file/d/15Sw9ljLVEKxUcHIjnnHYrBu616kAFF59/view?usp=sharing' 
                        isNew={ true }
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ การบริหารงานบุคคลพนักงานสถาบันประเภทพิเศษ' 
                        date='1' 
                        month='8' 
                        year='2561' 
                        imgSrc={ images['new02.jpg'] }
                        link='https://drive.google.com/file/d/1MnRQFuUvuDXS8l9DOjLiY9tT8Llja9t5/view?usp=sharing' 
                        isNew={ true }
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศความสามารถภาษาอังกฤษของพนักงานสถาบัน' 
                        date='1' 
                        month='8' 
                        year='2561' 
                        imgSrc={ images['new03.jpg'] }
                        link='https://drive.google.com/file/d/1kevfSsHYtO-gVUldMbsdZH_wiLTEswyo/view?usp=sharing' 
                        isNew={ true }
                        card />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ หลักเกณฑ์ วิธีการ และเงื่อนไขการต่อเวลาราชการของข้าราชการพลเรือนในสถาบันอุดมศึกษา' 
                        date='1' 
                        month='8' 
                        year='2561' 
                        link='https://drive.google.com/file/d/1O8kW-N-m2WFpK8UfZ9Z8gYYBDMzScqms/view?usp=sharing' 
                        isNew={ true }
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศสวัสดิการของพนักงานสถาบันเงินงบประมาณ'
                        date='1'
                        month='8' 
                        year='2561' 
                        link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV' 
                        isNew={ true }
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ ก.พ.อ. การกำหนดชื่อสาขาวิชาสำหรับการเสนอขอกำหนดตำแหน่งทางวิชาการ' 
                        date='1'
                        month='8' 
                        year='2561' 
                        link='https://drive.google.com/file/d/1J-OY03WpoPlqQQO-viHKd5Yn1F7smIyv/view?usp=sharing' 
                        isNew={ true }
                        card />
                </Grid.Column>  
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประเมินคุณภาพบุคลากรสายวิชาการ (PBP)' 
                        date='29' 
                        month='7'
                        year='2561' 
                        link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV'
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ขอเชิญประชุมคณะกรรมการฝ่ายประเมินผู้บริหาร' 
                        date='29' 
                        month='7' 
                        year='2561' 
                        link='https://drive.google.com/open?id=1MMnMOpOiH_Sb1L5cHOW3uicSbqDa_DVe' 
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='การป้อนข้อมูลภาระงานสายวิชาการ' 
                        date='29' 
                        month='7' 
                        year='2561' 
                        link='https://drive.google.com/open?id=1X5AK7829BW8-mydA7odqg0O7ggvj4LI1' 
                        card /> 
                </Grid.Column>
            </Grid.Row> 
        </Grid>  
    )
}

export default newsCards