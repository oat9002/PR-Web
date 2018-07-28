import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Dropdown
} from 'semantic-ui-react'
import banner from '../assets/pics/HeaderBanner.jpg'
import { Link } from 'react-router-dom';

export default class DesktopContainer extends Component {
    state = {
      fixed: false,
      menuActived: '',
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
                   <a href='//www.fam.kmitl.ac.th/' style ={{ 'color' : '#FFFFFF' }}>HR-KMITL</a>
                  </Menu.Item>
                  <Menu.Item name='title' active={ false } style={{ color:'#ffffff' }}>
                   <a href='//www.fam.kmitl.ac.th/' style ={{ 'color' : '#FFFFFF' }}>FAM-KMITL</a>
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
            <Segment
              textAlign='center'
              style={{ padding: '0em 0em', border: '0px' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                size='large'
                fluid
                borderless
              >
                <Container>
                  <Menu.Item name='title' active={ false } position='left'>
                    <Image src = { banner }/> 
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Dropdown simple item text='เกี่ยวกับเรา'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/test'>วิสัยทัศน์ พันธกิจ ภารกิจ</Dropdown.Item>
                        <Dropdown simple item text='โครงสร้างกองทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item as='a' href='/test'>งานบริหารทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Item>งานบริหารสวัสดิการและสิทธิประโยชน์</Dropdown.Item>
                            <Dropdown.Item>งานยุทธศาสตร์และพัฒนาระบบบริหารทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Item>งานสร้างเศริมศักยาภาพและพัฒนาทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Item>งานความก้าวหน้าในสายงานวิชาการเเละสนับสนุน</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown simple item compact text='แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item as='a' href='/test'>Electronics</Dropdown.Item>
                            <Dropdown.Item>Automotive</Dropdown.Item>
                            <Dropdown.Item>Home</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                  <Menu.Item 
                    name='aboutUs' 
                    active={ this.state.menuActived === 'aboutUs' } 
                    onClick={ this.menuClickedHandler }
                    position='right' 
                    style ={{ 'color' : '#000099' }} 
                    >
                      เกี่ยวกับเรา
                  </Menu.Item>
                  <Menu.Item 
                    name='empStructure' 
                    active={ this.state.menuActived === 'empStructure' } 
                    onClick={ this.menuClickedHandler }
                    style ={{ 'color' : '#000099' }} >
                    สารสนเทศบุคคลากร
                  </Menu.Item>
                  <Menu.Item 
                    name='empShouldKnow' 
                    active={ this.state.menuActived === 'empShouldKnow' } 
                    onClick={ this.menuClickedHandler }
                    style ={{ 'color' : '#000099' }} >
                    พนักงานควรรู้
                  </Menu.Item>
                  <Menu.Item 
                    name='contactUs' 
                    active={ this.state.menuActived === 'contactUs' } 
                    onClick={ this.menuClickedHandler }
                    style ={{ 'color' : '#000099' }} >
                    ติดต่อเรา
                  </Menu.Item>
                </Container>
              </Menu>
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