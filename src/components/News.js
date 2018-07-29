import React from 'react';
import { Item, Icon, Card, Image } from 'semantic-ui-react';

const news = (props) => {
  return props.card ? 
    (
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
    ) : 
    (
      <Item as='a' href={ props.link }>
        <Icon size='big' name={ props.icon }></Icon>
        <Item.Content>
          <Item.Header>{ props.title }</Item.Header>
          <Item.Meta>{ props.date }/{ props.month }/{ props.year }</Item.Meta>
        </Item.Content>
      </Item>
    )
}
  

export default news;