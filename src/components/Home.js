import React from 'react';
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import ResponsiveContainer from '../container/ResponsiveContainer';
import MenuIcons from './MenuIcons';
import NewsItems from './NewsItems';
import Galleries from './Galleries';
import Footer from './Footer';
import FooterLogo from '../assets/pics/logo4_2.jpg';
import HomeHeader from './Header';

const Home = () => (
  <ResponsiveContainer>
    <HomeHeader/>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <MenuIcons></MenuIcons>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={ 8 }>
            <Header as='h1' style={{ fontSize: '2em', color: '#00598b' }} icon='newspaper' content='News'/>
          </Grid.Column>
        </Grid.Row>
        <NewsItems></NewsItems>
      </Grid>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' icon='picture' style={{ fontSize: '2em', color: '#00598b' }} content='Gallery'></Header>
          </Grid.Column>
        </Grid.Row>
        <Galleries></Galleries>
      </Grid>
    </Segment>
    <Segment 
      vertical 
      style={{ padding: '5em 0em', backgroundImage: `url(${ FooterLogo })`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <Footer></Footer>
    </Segment>
  </ResponsiveContainer>
)
export default Home