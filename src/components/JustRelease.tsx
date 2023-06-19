
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillStar } from 'react-icons/ai';

const JustRelease = () => {

    const movies = [
        {
            title: "Creed III",
            poster_path: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/creed_iii_ver4_480x.progressive.jpg?v=1676400309",
            rating : 3.7,
            genre: "Drama . Sport"
        },
        {
            title: "Ghosted",
            poster_path: "https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_FMjpg_UX1000_.jpg",
            rating : 2.9,
            genre: "Action . Romance"
        },
        {
            title: "Black Clover: Sword of the Wizard King",
            poster_path: "https://img1.ak.crunchyroll.com/i/spire4/a0055b1a7454869c56e92d633a6388b61670405134_main.jpg",
            rating : 4,
            genre: "Fantasy . Action"
        },
        {
            title: "Dungeons & Dragons: Honour Among Thieves",
            poster_path: "https://m.media-amazon.com/images/M/MV5BNmFkN2M2NzItOTY5YS00MmE2LTk3ZjctNTk2YzQ5ZmRiYzJjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            rating : 3.65,
            genre: "Adventure . Fantasy"
        },
        {
            title: "Emancipation",
            poster_path: "https://m.media-amazon.com/images/M/MV5BN2RiY2RmMjItMDc1My00ZmViLWJkM2YtZjExNDI5MGM2ZWNiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
            rating : 3.1,
            genre: "Drama/Action"
        },
        {
            title: "Black Adam",
            poster_path: "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
            rating : 3.9,
            genre: "Action . Adventure"
        },
        {
            title: "Puss in Boots: The Last Wish",
            poster_path: "https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-products-digital.jpg",
            rating : 3.95,
            genre: "Adventure . Comedy"
        }
    ];


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



    return (
        <div className='bg-black py-10'>
            <h1 className="text-white text-4xl px-10">Just Release</h1>
            <Carousel
                responsive={responsive}
                ssr={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='bg-black py-4 px-10 '
            >
                {movies.map((movie) => (
                    <div className='flex flex-col items-center cursor-pointer mr-5' key={movie.title}>
                        <img src={movie.poster_path} alt="streaming" className='select-none object-contain object-center nonDrag rounded-3xl' loading="lazy"/>
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black h-32'></div>
                        <div className='absolute bottom-0 left-0 w-full px-6'>
                            <p className='text-white text-3xl'>{movie.title}</p>
                            <div className="flex items-center">
                                <AiFillStar className="text-yellow-400 text-3xl"/>
                                <p className='text-white text-xl'>{movie.rating}</p>
                                <p className='text-gray-400 text-2xl px-1'>|</p>
                                <p className='text-gray-400 text-xl'>{movie.genre}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default JustRelease