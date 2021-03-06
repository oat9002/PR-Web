import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

const footer = () => (
    <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Human Resource Division' />
              <List link inverted>
                <List.Item>
                  คณะการบริหารและจัดการ 
                </List.Item>    
                <List.Item>
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </List.Item>            
                <List.Item>
                  เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
                </List.Item>             
                <List.Item>
                  เบอร์โทรศัพท์ : 02-329-8459-60, 02-329800
                </List.Item>
                <List.Item> 
                  โทรสาร : 02-329-8461
                </List.Item>
                <List.Item>
                  E-mail: amc.kmitl@hotmail.com
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a' href='/applyjob'>
                  สมัครงาน
                </List.Item>
                <List.Item as='a'href='/shouldknow'>
                  พนักงานควรรู้
                </List.Item>
                <List.Item as='a' href='/welfare'>
                  สวัสดิการ
                </List.Item>
                <List.Item as='a' href='/development'>
                  พัฒนาบุคลากร
                </List.Item>
                <List.Item as='a'href='/progress'>
                  ความก้าวหน้า
                </List.Item>
                <List.Item as='a' href='/evaluation'>
                  ประเมินผลการปฏิบัตงาน
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
            <Header inverted as='h4' content='Go to' />
              <List link inverted>
                <List.Item>
                  <List.Icon name='internet explorer' />
                  <List.Content >
                    <a href='//www.fam.kmitl.ac.th/'>เว็บคณะการบริหารและจัดการ</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
);

export default footer;