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
                        title='ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์พนักงานสถาบันประเภทสายสนับสนุนวิชาการ' 
                        date='23' 
                        month='1' 
                        year='2562' 
                        imgSrc={ images['new02.jpg'] }
                        link='http://hr.kmitl.ac.th/wp-content/uploads/2019/01/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B8%9B%E0%B8%B5%E0%B8%87%E0%B8%9B%E0%B8%A1.62.pdf' 
                        isNew={ true }
                        card />
                </Grid.Column>
<Grid.Column width={ newsWidth }>
                    <News 
                        title='กองทุนสำรองเลี้ยงชีพ' 
                        date='23' 
                        month='1' 
                        year='2562' 
                        imgSrc={ images['new02.jpg'] }
                        link='http://hr.kmitl.ac.th/wp-content/uploads/2019/01/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1-%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B8%E0%B8%99%E0%B8%AA%E0%B8%B3%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%9E-TMB.pdf' 
                        isNew={ true }
                        card />
                </Grid.Column>
<Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศผลสอบแข่งขันบุคลากรประจำสถาบันสายสนับสนุนวิชาการประจำปีการศึกษา 2562' 
                        date='23' 
                        month='1' 
                        year='2562' 
                        imgSrc={ images['new02.jpg'] }
                        link=http://hr.kmitl.ac.th/wp-content/uploads/2019/01/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%AA%E0%B8%AD%E0%B8%9A-%E0%B8%AA%E0%B8%99%E0%B8%87.%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3.pdf 
                        isNew={ true }
                        card />
                </Grid.Column>
		<Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ รับสมัครบุคลากรเป็นพนักงานพิเศษ' 
                        date='23' 
                        month='1' 
                        year='2562' 
                        imgSrc={ images['new02.jpg'] }
                        link='http://hr.kmitl.ac.th/wp-content/uploads/2019/01/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.pdf' 
                        isNew={ true }
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ประกาศ ผลสอบบรรจุ' 
                        date='23' 
                        month='1'
                        year='2562' 
                        imgSrc={ images['new01.jpg'] }
                        link='http://hr.kmitl.ac.th/wp-content/uploads/2019/01/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%9C%E0%B8%A5%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%88%E0%B8%B8-%E0%B8%A7.%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%B4%E0%B8%99.pdf' 
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
                        imgSrc={ images['new04.jpg'] } 
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
                        imgSrc={ images['new05.jpg'] }
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
                        imgSrc={ images['new06.jpg'] }
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
                        imgSrc={ images['new07.jpg'] }
                        link='https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV'
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='ขอเชิญประชุมคณะกรรมการฝ่ายประเมินผู้บริหาร' 
                        date='29' 
                        month='7' 
                        year='2561' 
                        imgSrc={ images['new08.jpg'] }
                        link='https://drive.google.com/open?id=1MMnMOpOiH_Sb1L5cHOW3uicSbqDa_DVe' 
                        card />
                </Grid.Column>
                <Grid.Column width={ newsWidth }>
                    <News 
                        title='การป้อนข้อมูลภาระงานสายวิชาการ' 
                        date='29' 
                        month='7' 
                        year='2561' 
                        imgSrc={ images['new09.jpg'] }
                        link='https://drive.google.com/open?id=1X5AK7829BW8-mydA7odqg0O7ggvj4LI1' 
                        card /> 
                </Grid.Column>
            </Grid.Row> 
        </Grid>  
    )
}

export default newsCards