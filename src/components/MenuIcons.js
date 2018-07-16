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
    const width = Math.floor(17 / numOfIcons)
      return (
        <Grid container stackable verticalAlign='middle' >
            <Grid.Row centered>
                <Grid.Column width={ width } >
                   <Image as='a' href='//www.google.com' size='small' src={ register } />
                </Grid.Column>

                <Grid.Column width={ width }>
                   <Image as='a' href='//www.google.com' size='small' src={ fyi } />
                </Grid.Column>

                <Grid.Column width={ width }>
                    <Image as='a' href='//www.google.com' size='small' src={ welfare } />
                </Grid.Column>

                <Grid.Column width={ width }>
                    <Image as='a' href='//www.google.com' size='small' src={ develop } />
                </Grid.Column>

                <Grid.Column width={ width }>
                    <Image as='a' href='//www.google.com' size='small' src={ growth } />
                </Grid.Column>

                <Grid.Column width={ width }>
                    <Image as='a' href='//www.google.com' size='small' src={ evaluation } />
                </Grid.Column>
                
            </Grid.Row>
        </Grid>
    );
};

export default menuIcons;