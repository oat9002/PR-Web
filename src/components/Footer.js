import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import FacebookPage from './FacebookPage';

const footer = () => (
    <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Hunan Resource Division' />
              <List link inverted>
                <List.Item>คณะการบริหารและจัดการ </List.Item>
                <List.Item>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</List.Item>
                <List.Item>เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 1052</List.Item>
                <List.Item>เบอร์โทรศัพท์ : 02-329-8459-60, 02-329800</List.Item>
                <List.Item>โทรสาร : 02-329-8461</List.Item>
                <List.Item>E-mail: amc.kmitl@hotmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>สมัครงาน</List.Item>
                <List.Item as='a'>พนักงานควรรู้</List.Item>
                <List.Item as='a'>สวัสดิการ</List.Item>
                <List.Item as='a'>พัฒนาบุคลากร</List.Item>
                <List.Item as='a'>ความก้าวหน้า</List.Item>
                <List.Item as='a'>ประเมินผลการปฏิบัตงาน</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <FacebookPage></FacebookPage>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
);

export default footer;