import React from 'react';
import { Grid } from 'semantic-ui-react';
import System from './System';
import img from '../assets/pics/images.png';
import _ from 'lodash';

const systems = (props) => {
    const generateSystems = _.times(3, (idx) => {
        return (
            <Grid.Column>
                <System key={ idx } imgSrc={ img }/>
            </Grid.Column>
        );
    });

    return (
        <Grid.Row columns={ 4 } centered>
            { generateSystems }
        </Grid.Row>    
    )
}

export default systems;