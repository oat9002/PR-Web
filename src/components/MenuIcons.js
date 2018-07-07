import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import _ from 'lodash';
import exIcon from '../assets/pics/images.png';

const menuIcons = (props) => {
    const numOfIcons = 5;
    const width = Math.floor(16 / numOfIcons)
    const menuColumns = _.times(numOfIcons, (idx) => {
        return (
            <Grid.Column key={ idx } width={ width }>
                <Image src={ exIcon } />
            </Grid.Column>
        )
    });

    return (
        <Grid container stackable verticalAlign='middle' >
            <Grid.Row>
                { menuColumns }
            </Grid.Row>
        </Grid>
    );
};

export default menuIcons;