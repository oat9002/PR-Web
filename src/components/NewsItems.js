import React from 'react';
import { Item, Grid } from 'semantic-ui-react';
import News from './News';
import img from '../assets/pics/images.png';
import _ from 'lodash';

const newsGroup = (props) => {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ";

    const genearateNews = _.times(5, (idx) => {
        return (
            <News card={ false } key={ idx } date={ 5 + idx } month={ 7 } year={ 2018 } imgSrc={ img } title='Title' description={ description }/>
        );
    });

    return (
        <Grid.Row centered>
          <Grid.Column width={ 10 }>
            <Item.Group>
                { genearateNews }
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
    );
};

export default newsGroup;