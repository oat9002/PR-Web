import React, { Component } from 'react';
import { Modal, Image, Button } from 'semantic-ui-react';
import { Carousel } from 'element-react';

class Gallery extends Component {

    render() {
        const mobileSize = `${ Math.ceil(window.innerHeight * 0.4) }px`;
        const desktopSize = `${ Math.ceil(window.innerHeight * 0.7) }px`;

        return ( 
            <Modal
                trigger={ <Button style={{ margin:'1em 0em' }}size='small' basic color='blue'>คลิกเพื่อดูภาพ</Button> }
                closeIcon
            >
                <Modal.Content>
                    <Carousel 
                        height={ window.innerHeight > window.innerWidth ? mobileSize : desktopSize } 
                        indicatorPosition="none"
                        trigger='click'
                    >
                        { 
                            this.props.imgSrcs.map((src, idx) => (
                                <Carousel.Item key={ idx }>
                                    <Image verticalAlign='middle' centered rounded key={ idx } src={ src }></Image>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Modal.Content>
            </Modal>
        );
    }
}

export default Gallery;