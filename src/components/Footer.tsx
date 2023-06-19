
import { AiFillInstagram, AiFillFacebook,AiFillTwitterSquare,AiFillGoogleSquare } from 'react-icons/ai' 

const Footer = () => {
    return (
        <div className="bg-black p-10 pt-20 flex md:flex md:flex-row flex-col items-center md:gap-0 gap-10">
            <div className="flex flex-col w-full md:w-1/2 gap-10 md:gap-20">
                <p className="text-white text-xl lg:text-4xl">Our platform is trusted by millions & features best updated movies all around the world.</p>
                <ul className="flex  md:gap-10 sm:justify-around md:justify-start justify-between">
                    <li className="text-gray-400 text-sm md:text-xl cursor-pointer hover:text-white transition-all">Privacy Policy</li>
                    <li className="text-gray-400 text-sm md:text-xl cursor-pointer hover:text-white transition-all">Terms and Conditions</li>
                    <li className="text-gray-400 text-sm md:text-xl cursor-pointer hover:text-white transition-all">Languages</li>
                </ul>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-end gap-10">
                <div className="hidden gap-4 md:flex">
                    <p className="text-white text-base lg:text-2xl">Home</p>
                    <p className="text-white text-base lg:text-2xl">/</p>
                    <p className="text-white text-base lg:text-2xl">Discover</p>
                    <p className="text-white text-base lg:text-2xl">/</p>
                    <p className="text-white text-base lg:text-2xl">Influence</p>
                    <p className="text-white text-base lg:text-2xl">/</p>
                    <p className="text-white text-base lg:text-2xl">Release</p>
                </div>
                <div className="flex justify-between md:justify-end sm:justify-around w-full md:w-1/2 gap-5 text-white text-5xl">
                    <AiFillInstagram className="cursor-pointer"/>
                    <AiFillFacebook className="cursor-pointer"/>
                    <AiFillTwitterSquare className="cursor-pointer"/>
                    <AiFillGoogleSquare className="cursor-pointer"/>
                </div>
                <div className="mx-auto md:mx-0">
                    <p className="text-gray-400 text-lg">&copy; 2023 Mario Nan</p>
                </div>
            </div>
        </div>
    )
}

export default Footer