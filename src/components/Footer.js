import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

const footer = () => (
    <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header as='h4' content='Human Resource Division' />
              <List link>
                <List.Item
                style ={{ 'color' : '#000000' }}>
                คณะการบริหารและจัดการ 
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#000000' }}>
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#000000' }}>
                เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#000000' }}>
                เบอร์โทรศัพท์ : 02-329-8459-60, 02-329800
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#000000' }}> 
                โทรสาร : 02-329-8461
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#000000' }}>
                E-mail: amc.kmitl@hotmail.com
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h4' content='Services' />
              <List link >
                <List.Item as='a'
                style ={{ 'color' : '#000000' }} >
                สมัครงาน
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#000000' }}>
                พนักงานควรรู้
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#000000' }}>
                สวัสดิการ
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#000000' }}>
                พัฒนาบุคลากร<
                /List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#000000' }}>
                ความก้าวหน้า
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#000000' }}>
                ประเมินผลการปฏิบัตงาน
                </List.Item>

              </List>
            </Grid.Column>
            <Grid.Column width={5}>
            <Header  as='h4' content='Go to' />
              <List link >
                <List.Item style ={{ 'color' : '#000000' }}>
                  <List.Icon name='internet explorer' />
                  <List.Content >
                    <a href='//www.fam.kmitl.ac.th/' style ={{ 'color' : '#000000' }}>เว็บคณะการบริหารและจัดการ</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
);

export default footer;