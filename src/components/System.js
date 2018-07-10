import React from 'react';
import { Image } from 'semantic-ui-react';

const system = (props) => {
    return (
        <Image size='medium' src={ props.imgSrc }></Image>
    );
}

export default system;