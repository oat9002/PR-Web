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
    Transition
  } from 'semantic-ui-react'; 
import PropTypes from 'prop-types';
import img from '../assets/pics/logo.jpg';
import img2 from '../assets/pics/Logo2.jpg';

const header = (props) => (
    <Container>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Transition.Group visible={props.visible} duration={ 0 }>
              { props.visible && <Image src={ img } ></Image> }
              { !props.visible && <Image src={ img2 } ></Image> }
            </Transition.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
);

header.propTypes = {
    mobile: PropTypes.bool,
};

export default header;

