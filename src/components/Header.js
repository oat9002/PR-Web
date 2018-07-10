import React from 'react'
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
import PropTypes from 'prop-types';
import img from '../assets/pics/logo.jpg';

const header = ({ mobile }) => (
    <Container>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Image src={ img } ></Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
);

header.propTypes = {
    mobile: PropTypes.bool,
};

export default header;

