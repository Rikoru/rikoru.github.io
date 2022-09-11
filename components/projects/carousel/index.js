import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { projectArrayProp } from '../projects';

export default function Carousel({ items }) {
  const settings = {
    focusOnSelect: true,
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };
  return <Slider {...settings}>{children}</Slider>;
}

Carousel.propTypes = {
  items: PropTypes.shape(projectArrayProp),
};
