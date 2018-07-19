import React, { Component } from 'react';
import { Modal, Image, Button, Transition } from 'semantic-ui-react';
import { Carousel } from 'element-react';

class Gallery extends Component {
    state = {
        visible: false
    }

    visibleHandler = () => {
        this.setState({
           visible: !this.state.visible
        });
    }

    render() {
        const mobileSize = `${ Math.ceil(window.innerHeight * 0.4) }px`;
        const desktopSize = `${ Math.ceil(window.innerHeight * 0.55) }px`;

        return (
            //<Transition visible={this.state.visible} animation='scale' duration={ 500 }>
                <Modal
                    trigger={ <Button size='small' basic color='blue'>คลิกเพื่อดูภาพ</Button> }
                >
                    <Modal.Content>
                        <Carousel 
                            height={ this.props.mobile ? mobileSize : desktopSize } 
                            indicatorPosition="outside"
                            trigger='click'
                        >
                            { 
                                this.props.imgSrcs.map((src, idx) => (
                                    <Carousel.Item key={ idx }>
                                        <Image key={ idx } src={ src }></Image>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Modal.Content>
                </Modal>
           // </Transition>
        );
    }
}

export default Gallery;