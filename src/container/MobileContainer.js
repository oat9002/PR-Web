import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import HomeHeader from '../components/Header';

export default class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    menuClickedHandler = (e, { name }) => {
      this.setState({
        menuActived: name
      });
    }
  
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
              <Menu.Item 
                name='aboutUs' 
                active={ this.state.menuActived === 'aboutUs' } 
                onClick={ this.menuClickedHandler }
                position='right'>
                เกี่ยวกับเรา
              </Menu.Item>
              <Menu.Item 
                name='empStructure' 
                active={ this.state.menuActived === 'empStructure' } 
                onClick={ this.menuClickedHandler }>
                สารสนเทศบุคคลากร
              </Menu.Item>
              <Menu.Item 
                name='empShouldKnow' 
                active={ this.state.menuActived === 'empShouldKnow' } 
                onClick={ this.menuClickedHandler }>
                พนักงานควรรู้
              </Menu.Item>
              <Menu.Item 
                name='contactUs' 
                active={ this.state.menuActived === 'contactUs' } 
                onClick={ this.menuClickedHandler }>
                ติดต่อเรา
              </Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '100vh' }}
            >
              <Segment
                textAlign='center'
                style={{padding: '0em 0em', border: '0px' }}
                vertical
              >
                <Container>
                  <Menu pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item name='title' active={ false } position='right'
                      style={{color: '#04004d'}}>
                        ฝ่ายทรัยากรบุคคล คณะการบริหารและจัดการ
                    </Menu.Item>
                  </Menu>
                </Container>
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  