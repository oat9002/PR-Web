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
import Galleries from './Galleries';
import Systems from './Systems';
import Footer from './Footer';
import FooterLogo from '../assets/pics/logo4_2.jpg';

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <MenuIcons></MenuIcons>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={ 8 }>
            <Header as='h1' style={{ fontSize: '2em' }}>
              News
            </Header>
          </Grid.Column>
        </Grid.Row>
        <NewsCard></NewsCard>
        <NewsItems></NewsItems>
      </Grid>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '2em' }}>
              Gallery
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Galleries></Galleries>
      </Grid>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h1' style={{ fontSize: '2em' }}>
              System
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Systems></Systems>
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