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
                  <Menu.Menu position='right' >
                    <Dropdown simple item text='เกี่ยวกับเรา'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/test'>วิสัยทัศน์ พันธกิจ ภารกิจ</Dropdown.Item>
                        <Dropdown simple item text='โครงสร้างกองทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item as='a' href='/test'>งานบริหารทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Item>งานบริหารสวัสดิการและสิทธิประโยชน์</Dropdown.Item>
                            <Dropdown.Item>งานยุทธศาสตร์และพัฒนาระบบบริหารทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown simple item text='งานสร้างเศริมศักยาภาพและพัฒนาทรัพยากรบุคคล'>
                              <Dropdown.Menu>
                                <Dropdown.Item as='a' href='/test'>หลักสูตร/โครงสร้างการพัฒนาทรัพยากรบุคคล</Dropdown.Item>
                                <Dropdown.Item>การประเมินผลการปฏิบัติงาน</Dropdown.Item>
                                <Dropdown.Item>ทุน</Dropdown.Item>
                              </Dropdown.Menu>
                              </Dropdown>
                            <Dropdown.Item>งานความก้าวหน้าในสายงานวิชาการเเละสนับสนุน</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown simple item compact text='แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item as='a' href='/test'>แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล(PDF)</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item as='a' href='/test'>ค่านิยองค์กร</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>



                  <Menu.Menu position='right'>
                    <Dropdown simple item text='สารสนเทศบุคลากร'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/test'>รายงานข้อมูลสารสนเทศบุคลกร</Dropdown.Item>
                        <Dropdown.Item as='a' href='/test'>แผนภาพและข้อมูลแสดงการกระจายอายุของบุคลากร</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>

                  <Menu.Menu position='right'>
                    <Dropdown simple item text='พนักงานควรรู้'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/test'>คู่มือพนักงาน</Dropdown.Item>
                        <Dropdown.Item as='a' href='/test'>Infographic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>


                  <Menu.Menu position='right'>
                    <Dropdown simple item text='ติดต่อเรา'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' href='/test'>ติดต่อบุคลากรทรัพยากรบุคคล</Dropdown.Item>
                        <Dropdown.Item as='a' href='/test'>ส่งคำถาม/ข้อเสนอแนะ</Dropdown.Item>
                        <Dropdown.Item as='a' href='/test'>นักศึกษาติดต่อเข้าฝึกงาน/ผู้สนใจติดต่อเข้าศึกษาดูงานกองทรัพยากรบุคคล</Dropdown.Item>
                        <Dropdown.Item as='a' href='/test'>แผนที่-การเดินทาง</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
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