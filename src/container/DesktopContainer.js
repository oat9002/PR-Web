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
import Constants from '../Constants';

export default class DesktopContainer extends Component {
    state = {
      fixed: false,
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
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
                        <Dropdown.Item>วิสัยทัศน์ พันธกิจ ภารกิจ</Dropdown.Item>
                        <Dropdown simple item text='โครงสร้างกองทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item>งานบริหารทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Item>งานบริหารสวัสดิการและสิทธิประโยชน์</Dropdown.Item>
                            <Dropdown.Item>งานยุทธศาสตร์และพัฒนาระบบบริหาร<br/>ทรัพยากรบุคคล</Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Header>งานสร้างเสริมศักยภาพและพัฒนาทรัพยากรบุคคล</Dropdown.Header>
                            <Dropdown.Item>หลักสูตรโครงสร้างการพัฒนาทรัพยากร<br/>บุคคล</Dropdown.Item>
                            <Dropdown.Item>การประเมินผลการปฏิบัติงาน</Dropdown.Item>
                            <Dropdown.Item as='a' href={ `${ Constants.rootUrl.aboutUs }/budget` }>ทุน</Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>งานความก้าวหน้าในสายงานวิชาการเเละ<br/>สนับสนุน</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item text='แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล'>
                          <Dropdown.Menu>
                            <Dropdown.Item>แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล<br/>(PDF)</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item>ค่านิยมองค์กร</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                  <Menu.Menu position='right'>
                    <Dropdown simple item text='สารสนเทศบุคลากร'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' >รายงานข้อมูลสารสนเทศบุคลากร</Dropdown.Item>
                        <Dropdown.Item as='a' >แผนภาพและข้อมูลแสดงการกระจายอายุของบุคลากร</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                  <Menu.Menu position='right'>
                    <Dropdown simple item text='พนักงานควรรู้'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' >คู่มือพนักงาน</Dropdown.Item>
                        <Dropdown.Item as='a' >Infographic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                  <Menu.Menu position='right'>
                    <Dropdown simple item text='ติดต่อเรา'>
                      <Dropdown.Menu>
                        <Dropdown.Item as='a' >ติดต่อบุคลากรทรัพยากรบุคคล</Dropdown.Item>
                        <Dropdown.Item as='a' >ส่งคำถาม/ข้อเสนอแนะ</Dropdown.Item>
                        <Dropdown.Item as='a' >นักศึกษาติดต่อเข้าฝึกงาน/ผู้สนใจติดต่อเข้าศึกษาดูงานกองทรัพยากรบุคคล</Dropdown.Item>
                        <Dropdown.Item as='a' >แผนที่-การเดินทาง</Dropdown.Item>
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