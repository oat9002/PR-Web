import React from 'react';
import { Item, Icon, Card, Image } from 'semantic-ui-react';
import newsSubscript from '../assets/pics/new_icon.gif'

const news = (props) => {
  const title = (
    <div>
        { props.title }
        {
          props.isNew ? (
            <sub><Image style={{ display: 'inline', marginLeft: '5px' }} src={ newsSubscript } width = "22" height = "9"/></sub>
          ) : (
            null
          )
        }
    </div>
  );

  return props.card ? 
    (
      <Card as='a' href={ props.link }>
        { props.imgSrc != null ?  
          <Image src={ props.imgSrc } label={{ color: 'green', content: `${ props.date.padStart(2, '0') }/${ props.month.padStart(2, '0') }/${ props.year.padStart(2, '0') }`, ribbon: true }} /> : 
          <Icon style={{ marginLeft: '65px' }} color='black'size='massive' name='picture'/> 
        }
        <Card.Content> 
          <Card.Description>{ title }</Card.Description> 
        </Card.Content> 
      </Card>
    ) : 
    (
      <Item as='a' href={ props.link }>
        { props.imgSrc != null ? <Item.Image size='small' src={ props.imgSrc } /> : <Icon size='big' name='file'/> }
        <Item.Content verticalAlign='middle'>
          <Item.Header>
            { title }
          </Item.Header>
          <Item.Meta>{ props.date.padStart(2, '0') }/{ props.month.padStart(2, '0') }/{ props.year.padStart(2, '0') }</Item.Meta>
        </Item.Content>
      </Item>
    )
}
  

export default news;