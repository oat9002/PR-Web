import React from 'react';
import Gallery from './Gallery';
import { Grid } from 'semantic-ui-react';
import img from '../assets/pics/images.png';
import _ from 'lodash';

const galleries = (props) => {
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ";

    const generateGalleries = _.times(4, (idx) => {
        return (
            <Grid.Column>
                <Gallery key={ idx } date={ 5 + idx } month={ 7 } year={ 2018 } imgSrc={ img } title='Title' description={ description  }/>
            </Grid.Column>
        );
    });

    return (
        <Grid.Row columns={ 4 } centered>
            { generateGalleries }
        </Grid.Row>    
    )
}

export default galleries;