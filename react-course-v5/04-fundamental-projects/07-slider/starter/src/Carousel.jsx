import './index.css';
import { list, shortList, longList } from './data';
import Slide from './Slide';
import { useState } from 'react';

const Carousel = () => {
  console.log(list);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moveToNextSlide = (prevIndex) => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === list.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const moveToPrevSlide = (prevIndex) => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return list.length - 1;
      }
      return prevIndex - 1;
    });
  };
  return <Slide list={list} />;
};
export default Carousel;
