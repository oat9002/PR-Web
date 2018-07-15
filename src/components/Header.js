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
import img2 from '../assets/pics/logo5.jpg';
import img3 from '../assets/pics/logo6.jpg';
import img4 from '../assets/pics/logo7.jpg';

class HomeHeader extends Component {

  render() {
    return (
      <Container>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
              <Carousel height={ this.props.mobile ? '300px' : '500px' } indicatorPosition="outside">
                <Carousel.Item>
                  <Image src={img}></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={img2}></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={img3}></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={img4}></Image>
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

