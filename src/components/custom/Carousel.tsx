import EmblaCarousel from './../Embala/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = { direction: 'ltr', loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Carousel = () => {
  return (
    <EmblaCarousel slides={SLIDES} options={OPTIONS}  />
  );
};

export default Carousel;
