import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
} from 'semantic-ui-react'
import HomeHeader from '../components/Header';

export default class DesktopContainer extends Component {
    state = {
      fixed: false,
      menuActived: '',
      visible: true
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    menuClickedHandler = (e, { name }) => {
      this.setState({
        menuActived: name
      });
    }
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive {...Responsive.onlyComputer}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
             style={{ padding: '0em 0em', backgroundColor: '#00518b' }}
             vertical
            >
               <Menu
                secondary
                size='large'
              >
                <Container>
                  <Menu.Item name='title' active={ false } position='right' style={{ color:'#ffffff' }}>
                   menu 1
                  </Menu.Item>
                  <Menu.Item name='title' active={ false } style={{ color:'#ffffff' }}>
                   menu 2
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
            <Segment
              textAlign='center'
              style={{ minHeight: 400, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item name='title' active={ false } position='left'
                  style={{color: '#04004d'}}>
                    ฝ่ายทรัยากรบุคคล คณะการบริหารและจัดการ
                  </Menu.Item>
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
                </Container>
              </Menu>
              <HomeHeader visible={this.state.visible} />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }