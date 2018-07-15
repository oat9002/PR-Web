import React, { Component } from 'react'
import {
    Container,
    Grid,
    Image,
  } from 'semantic-ui-react'; 
import {
    Carousel
  } from 'element-react';
  
import PropTypes from 'prop-types';
import img from '../assets/pics/header1.jpg';
import img2 from '../assets/pics/header2.jpg';
import img3 from '../assets/pics/header3.jpg';
import img4 from '../assets/pics/header4.jpg';

class HomeHeader extends Component {
  render() {
    const mobileSize = `${ Math.ceil(window.innerHeight * 0.4) }px`;
    const desktopSize = `${ Math.ceil(window.innerHeight * 0.8) }px`;

    return (
      <Container>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row centered>
            <Grid.Column width={14}>
              <Carousel 
                height={ this.props.mobile ? mobileSize : desktopSize } 
                indicatorPosition="outside"
                trigger='click'
              >
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

