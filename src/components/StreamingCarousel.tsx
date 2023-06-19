import React from 'react'
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const StreamingCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const images: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png",
    "https://1000logos.net/wp-content/uploads/2017/08/Font-Pixar-Logo.jpg",
    "https://www.directlink.coop/img/logos/hbo/hbo-max-horiz-white.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png",
    "https://1000logos.net/wp-content/uploads/2017/04/Color-National-Geographic-Logo.jpg",


  ]
  return (
    <Carousel 
    responsive={responsive} 
    ssr={true} 
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    className='bg-black py-4 px-10'
    >
      {images.map((image) => (
        
          <img src={image} alt="streaming" className='h-24 w-60 select-none object-contain object-center nonDrag' key={image} loading="lazy"/>
        
      ))}
    </Carousel>
  )
}

export default StreamingCarousel