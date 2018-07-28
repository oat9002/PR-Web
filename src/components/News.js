import React from 'react';
import { Item, Card, Image } from 'semantic-ui-react';

const news = (props) => {
  return props.card ? 
    (
      null
    ) : 
    (
      <Item>
        <Item.Image size='tiny' src={ props.imgSrc } />
        <Item.Content>
          <Item.Header>{ props.title }</Item.Header>
          <Item.Meta>{ props.date }/{ props.month }/{ props.year }</Item.Meta>
          <Item.Description>
           { props.description }
          </Item.Description>
        </Item.Content>
      </Item>
    )
}
  

export default news;