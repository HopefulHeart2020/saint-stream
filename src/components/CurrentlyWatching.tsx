import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from '@mui/material/Slider';

const CurrentlyWatching = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2

        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };

    const movies = [
        {
            title: 'The Dark Knight',
            year: '2008',
            image: 'https://cdn.wallpapersafari.com/65/71/YejQEb.jpg',
            movieLength: '2:32:00',
            progress: "0:34:03",
            percentage: 22.37
        },
        {
            title: "deadpool",
            year: "2016",
            image: "https://cdn.wallpapersafari.com/57/55/fF3Q4L.jpg",
            movieLength: "1:48:00",
            progress: "1:23:04",
            percentage: 76.85
        },
        {
            title: "UP",
            year: "2009",
            image: "https://www.wallpaperflare.com/static/774/143/776/movies-up-movie-animated-movies-pixar-animation-studios-wallpaper.jpg",
            movieLength: "1:36:00",
            progress: "0:28:00",
            percentage: 29.16
        },
        {
            title:"Blade Runner 2049",
            year: "2017",
            image: "https://wallpapercave.com/wp/wp8492303.jpg",
            movieLength: "2:44:00",
            progress: "0:44:00",
            percentage: 26.47
        },
        {
            title: "The Hobbit: An Unexpected Journey",
            year: "2012",
            image: "https://wallpapercave.com/wp/wp1945912.jpg",
            movieLength: "2:49:00",
            progress: "0:49:00",
            percentage: 28.85
        },
    ]

    return (
        <>
            <p className="bg-black text-white px-10 py-4 text-4xl">Continue Watching</p>
        <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className='bg-black py-4 px-10 '
        >
            {movies.map((movie) => (
            <div className='cursor-pointer relative rounded-3xl lg:w-[30vw] md:w-[46vw] sm:w-[48vw] w-[85vw]' key={movie.title}>
                <img src={movie.image} alt="" className=' object-contain object-center nonDrag rounded-3xl' loading="lazy"/>
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black h-36'></div>
                <div className='absolute bottom-0 left-0 w-full px-6'>
                    <p className='text-white text-sm lg:text-3xl'>{movie.title}</p>
                    <p className='text-gray-300 text-xs lg:text-xl'>{movie.year}</p>
                    <div className=' mx-auto flex gap-2 items-center'>
                        <p className='text-white hidden lg:inline lg:text-sm text-xs'>{movie.progress}</p>
                        <Slider defaultValue={movie.percentage} aria-label="Small" valueLabelDisplay="auto" disabled 
                        style={{color: '#00925D'}}
                        />
                        <p className='text-white hidden lg:inline lg:text-sm text-xs'>{movie.movieLength}</p>
                    </div>
                </div>
            </div>
            ))}

        </Carousel>
        </>
    )
}

export default CurrentlyWatching