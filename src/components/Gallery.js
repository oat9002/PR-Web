import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const gallery = (props) => {
    return (
        <Card>
            <Image src={ props.imgSrc } />
            <Card.Content>
            <Card.Header>{ props.title }</Card.Header>
            <Card.Meta>
                <span className='date'>{ props.date }/{ props.month }/{ props.year }</span>
            </Card.Meta>
            <Card.Description>{ props.description }</Card.Description>
            </Card.Content>
        </Card>
    );
}

export default gallery;