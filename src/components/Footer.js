import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

const footer = () => (
    <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header as='h4' inverted content='Human Resource Division' />
              <List link>
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}>
                คณะการบริหารและจัดการ 
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}>
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}>
                เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}>
                เบอร์โทรศัพท์ : 02-329-8459-60, 02-329800
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}> 
                โทรสาร : 02-329-8461
                </List.Item>
                
                <List.Item
                style ={{ 'color' : '#FFFFFF' }}>
                E-mail: amc.kmitl@hotmail.com
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h4' inverted content='Services' />
              <List link >
                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }} >
                สมัครงาน
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }}>
                พนักงานควรรู้
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }}>
                สวัสดิการ
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }}>
                พัฒนาบุคลากร<
                /List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }}>
                ความก้าวหน้า
                </List.Item>

                <List.Item as='a'
                style ={{ 'color' : '#FFFFFF' }}>
                ประเมินผลการปฏิบัตงาน
                </List.Item>

              </List>
            </Grid.Column>
            <Grid.Column width={5}>
            <Header  as='h4' inverted  content='Go to' />
              <List link >
                <List.Item style ={{ 'color' : '#FFFFFF' }}>
                  <List.Icon name='internet explorer' />
                  <List.Content >
                    <a href='//www.fam.kmitl.ac.th/' style ={{ 'color' : '#FFFFFF' }}>เว็บคณะการบริหารและจัดการ</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
);

export default footer;