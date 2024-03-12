import React from 'react';
import '../HeroSlider/HeroSlider.css';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default function HeroSlider() {
  return (
    <Carousel>
      <CarouselItem>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First Slide"
        />
      </CarouselItem>
      <CarouselItem interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </CarouselItem>
      <CarouselItem interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </CarouselItem>
      <CarouselItem interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Forth Slide"
        />
      </CarouselItem>
      <CarouselItem interval={4000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fifth Slide"
        />
      </CarouselItem>
    </Carousel>
  );
}
