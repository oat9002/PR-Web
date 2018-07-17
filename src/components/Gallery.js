import React from 'react';
import { Modal, Image } from 'semantic-ui-react';
import { Carousel } from 'element-react';

const gallery = (props) => {
    const mobileSize = `${ Math.ceil(window.innerHeight * 0.4) }px`;
    const desktopSize = `${ Math.ceil(window.innerHeight * 0.7) }px`;

    return (
        <Modal
            trigger={ <Image src={ props.imgSrcs[0] }></Image> }
        >
            <Modal.Content>
                <Carousel 
                    height={ props.mobile ? mobileSize : desktopSize } 
                    indicatorPosition="outside"
                    trigger='click'
                >
                    { 
                        props.imgSrcs.map((src, idx) => (
                            <Carousel.Item key={ idx }>
                                <Image key={ idx } src={ src }></Image>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Modal.Content>
        </Modal>
    );
}

export default gallery;