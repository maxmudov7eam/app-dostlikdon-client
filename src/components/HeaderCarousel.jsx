
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets/image/slider.png',
    src2: '/assets/image/slider-bg.png',
    altText: 'Slide 1',
    caption: "O`ZBEKISTON RESPUBLIKASI 'O`ZDONMAXSULOT' AKSIYADORLIK KOMPANIYASI 'DO`STLIKDONMAXSULOTLARI' AKSIYADORLIK JAMIYATI"
  },
  {
    src: '/assets/image/slider.png',
    src2: '/assets/image/slider-bg.png',
    altText: 'Slide 2',
    caption: "O`ZBEKISTON RESPUBLIKASI 'O`ZDONMAXSULOT' AKSIYADORLIK KOMPANIYASI 'DO`STLIKDONMAXSULOTLARI' AKSIYADORLIK JAMIYATI"
  },
  {
    src: '/assets/image/slider.png',
    src2: '/assets/image/slider-bg.png',
    altText: 'Slide 3',
    caption: "O`ZBEKISTON RESPUBLIKASI 'O`ZDONMAXSULOT' AKSIYADORLIK KOMPANIYASI 'DO`STLIKDONMAXSULOTLARI' AKSIYADORLIK JAMIYATI"
  }
];

const HeaderCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='w-100' />
        <img src={item.src2} className='secondary' />
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div className="headerCarousel">

      
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}>
            <span><img src="/assets/icons/next.svg" alt=""/></span>
        </CarouselControl>
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

    </div>
  );
}

export default HeaderCarousel;
