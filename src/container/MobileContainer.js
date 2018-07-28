import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Icon,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

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
              <Menu.Menu position='right' >
                <Dropdown simple item text='เกี่ยวกับเรา'>
                        <Dropdown.Menu>
                          <Dropdown.Item as='a' >วิสัยทัศน์ พันธกิจ ภารกิจ</Dropdown.Item>
                          <Dropdown simple item text='โครงสร้างกองทรัพยากรบุคคล'>
                            <Dropdown.Menu>
                              <Dropdown.Item as='a' >งานบริหารทรัพยากรบุคคล</Dropdown.Item>
                              <Dropdown.Item>งานบริหารสวัสดิการและสิทธิประโยชน์</Dropdown.Item>
                              <Dropdown.Item>งานยุทธศาสตร์และพัฒนาระบบบริหารทรัพยากรบุคคล</Dropdown.Item>
                              <Dropdown simple item text='งานสร้างเศริมศักยาภาพและพัฒนาทรัพยากรบุคคล'>
                                <Dropdown.Menu>
                                  <Dropdown.Item as='a' >หลักสูตร/โครงสร้างการพัฒนาทรัพยากรบุคคล</Dropdown.Item>
                                  <Dropdown.Item>การประเมินผลการปฏิบัติงาน</Dropdown.Item>
                                  <Dropdown.Item>ทุน</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                              <Dropdown.Item>งานความก้าวหน้าในสายงานวิชาการเเละสนับสนุน</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown simple item text='แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล'>
                            <Dropdown.Menu>
                              <Dropdown.Item as='a' >แผนยุทธศาสตร์การบริหารทรัพยากรบุคคล(PDF)</Dropdown.Item>
                          </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown.Item as='a' >ค่านิยองค์กร</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                      <Dropdown simple item text='สารสนเทศบุคลากร'>
                        <Dropdown.Menu>
                          <Dropdown.Item as='a' >รายงานข้อมูลสารสนเทศบุคลกร</Dropdown.Item>
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
  