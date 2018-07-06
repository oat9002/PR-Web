import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const responsiveContainer = (props) => (
    <div>
      <DesktopContainer>{ props.children }</DesktopContainer>
      <MobileContainer>{ props.children }</MobileContainer>
    </div>
);

responsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default responsiveContainer;

