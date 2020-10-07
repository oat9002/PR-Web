import React from "react";
import { Grid, Item } from "semantic-ui-react";
import { importImages } from "../Utils";
import News from "./News";

const newsGroup = (props) => {
    const images = importImages(
        require.context("../assets/pics/News", false, /\.(png|jpe?g|svg)$/)
    );

    return (
        <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={14}>
                <Item.Group>
                    <News
                        title="ประกาศ วัน เวลา ทำงานและวิธีการลงเวลาทำงาน"
                        date="1"
                        month="8"
                        year="2561"
                        imgSrc={images["new01.jpg"]}
                        link="https://drive.google.com/file/d/15Sw9ljLVEKxUcHIjnnHYrBu616kAFF59/view?usp=sharing"
                        isNew={true}
                    />
                    <News
                        title="ประกาศ การบริหารงานบุคคลพนักงานสถาบันประเภทพิเศษ"
                        date="1"
                        month="8"
                        year="2561"
                        imgSrc={images["new02.jpg"]}
                        link="https://drive.google.com/file/d/1MnRQFuUvuDXS8l9DOjLiY9tT8Llja9t5/view?usp=sharing"
                        isNew={true}
                    />
                    {/* <News 
                    title='ประกาศความสามารถภาษาอังกฤษของพนักงานสถาบัน' 
                    date='1' 
                    month='8' 
                    year='2561' 
                    imgSrc={ images['new03.jpg'] }
                    link='https://drive.google.com/file/d/1kevfSsHYtO-gVUldMbsdZH_wiLTEswyo/view?usp=sharing' 
                    isNew={ true }/> */}
                    <News
                        title="ประกาศ หลักเกณฑ์ วิธีการ และเงื่อนไขการต่อเวลาราชการของข้าราชการพลเรือนในสถาบันอุดมศึกษา"
                        date="1"
                        month="8"
                        year="2561"
                        link="https://drive.google.com/file/d/1O8kW-N-m2WFpK8UfZ9Z8gYYBDMzScqms/view?usp=sharing"
                        isNew={true}
                    />
                    <News
                        title="ประกาศสวัสดิการของพนักงานสถาบันเงินงบประมาณ"
                        date="1"
                        month="8"
                        year="2561"
                        link="https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV"
                        isNew={true}
                    />
                    <News
                        title="ประกาศ ก.พ.อ. การกำหนดชื่อสาขาวิชาสำหรับการเสนอขอกำหนดตำแหน่งทางวิชาการ"
                        date="1"
                        month="8"
                        year="2561"
                        link="https://drive.google.com/file/d/1J-OY03WpoPlqQQO-viHKd5Yn1F7smIyv/view?usp=sharing"
                        isNew={true}
                    />
                    <News
                        title="ประเมินคุณภาพบุคลากรสายวิชาการ (PBP)"
                        date="29"
                        month="7"
                        year="2561"
                        link="https://drive.google.com/open?id=1UtRu-T6IekfyT8WPoBbVq1MTobWyNxiV"
                    />
                    <News
                        title="ขอเชิญประชุมคณะกรรมการฝ่ายประเมินผู้บริหาร"
                        date="29"
                        month="7"
                        year="2561"
                        link="https://drive.google.com/open?id=1MMnMOpOiH_Sb1L5cHOW3uicSbqDa_DVe"
                    />
                    <News
                        title="การป้อนข้อมูลภาระงานสายวิชาการ"
                        date="29"
                        month="7"
                        year="2561"
                        link="https://drive.google.com/open?id=1X5AK7829BW8-mydA7odqg0O7ggvj4LI1"
                    />
                </Item.Group>
            </Grid.Column>
        </Grid.Row>
    );
};

export default newsGroup;
