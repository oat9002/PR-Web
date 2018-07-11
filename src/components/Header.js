import React, { Component } from 'react'
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
    Transition
  } from 'semantic-ui-react'; 
import {
    Carousel
  } from 'element-react';
  
import PropTypes from 'prop-types';
import img from '../assets/pics/logo.jpg';
import img2 from '../assets/pics/Logo2.jpg';

class HomeHeader extends Component {
  render() {
    return (
      <Container>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
              <Carousel height="500px" indicatorPosition="outside">
                <Carousel.Item>
                  <Image src={img}></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={img2}></Image>
                </Carousel.Item>
              </Carousel>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
    );
  }
}

HomeHeader.propTypes = {
    mobile: PropTypes.bool,
};

export default HomeHeader;

