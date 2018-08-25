import React from 'react';
import { Item, Icon, Card, Image } from 'semantic-ui-react';
import newsSubscript from '../assets/pics/new_icon.gif'

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
        { props.imgSrc != null ? <Item.Image size='small' src={ props.imgSrc }/> : <Icon size='big' name='file'></Icon> }
        <Item.Content verticalAlign='middle'>
          <Item.Header>
            { props.title }
            {
              props.isNew ? (
                <sub><Image style={{ display: 'inline', marginLeft: '5px' }} src={ newsSubscript } width = "22" height = "9"/></sub>
              ) : (
                null
              )
            }
          </Item.Header>
          <Item.Meta>{ props.date }/{ props.month }/{ props.year }</Item.Meta>
        </Item.Content>
      </Item>
    )
}
  

export default news;