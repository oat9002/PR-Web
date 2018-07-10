import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import _ from 'lodash';
import register from '../assets/pics/register.png';
import fyi from '../assets/pics/fyi.png'
import develop from '../assets/pics/develop.png'
import evaluation from '../assets/pics/evaluation.png'
import welfare from '../assets/pics/welfare.png'
import growth from '../assets/pics/growth.png'

const menuIcons = (props) => {
    const numOfIcons = 6;
    const width = Math.floor(16 / numOfIcons)
      return (
        <Grid container stackable verticalAlign='middle' >
<<<<<<< HEAD
            <Grid.Row>
                <Grid.Column width={ width }>
                    <Image src={ register } />
                </Grid.Column>
                <Grid.Column width={ width }>
                    <Image src={ fyi } />
                </Grid.Column>
                <Grid.Column width={ width }>
                    <Image src={ develop } />
                </Grid.Column>
                <Grid.Column width={ width }>
                    <Image src={ evaluation } />
                </Grid.Column>
                <Grid.Column width={ width }>
                    <Image src={ welfare } />
                </Grid.Column>
                <Grid.Column width={ width }>
                    <Image src={ growth } />
                </Grid.Column>
=======
            <Grid.Row centered>
                { menuColumns }
>>>>>>> 58364fb66ff92381d33185c053e375f03dc56e90
            </Grid.Row>
        </Grid>
    );
};

export default menuIcons;