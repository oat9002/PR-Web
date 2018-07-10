import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  GridRow,
} from 'semantic-ui-react';
import ResponsiveContainer from '../container/ResponsiveContainer';
import MenuIcons from './MenuIcons';
import NewsItems from './NewsItems';
import NewsCard from './NewsCards';

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <MenuIcons></MenuIcons>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={ 8 }>
            <Header as='h1' style={{ fontSize: '2em' }}>
              News
            </Header>
          </Grid.Column>
        </Grid.Row>
        <NewsCard></NewsCard>
        <Grid.Row centered>
          <Grid.Column width={ 10 }>
            <NewsItems></NewsItems>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '2em' }}>
              Gallery
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '2em' }}>
              System
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Hunan Resource Division' />
              <List link inverted>
                <List.Item as='a'>กองทรัยากรบุคคล</List.Item>
                <List.Item as='a'>สำนังานอริการบดี สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</List.Item>
                <List.Item as='a'>เลขที่ 1 ถนนฉลองกรุง แขวงลาดกระบัง เขตลาดกระบัง กทม 10520</List.Item>
                <List.Item as='a'>Tel: 66(0)........</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
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
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default Home