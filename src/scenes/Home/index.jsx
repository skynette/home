import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import CarouselComponent from "../../components/Carousel"
import { GiHighFive, GiHouse, GiCalculator } from 'react-icons/gi'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiFillCaretRight } from 'react-icons/ai'
import Partner1 from "../../assets/partners/1.png"
import Partner2 from "../../assets/partners/2.png"
import Partner3 from "../../assets/partners/3.png"
import Partner4 from "../../assets/partners/4.png"
import Partner5 from "../../assets/partners/5.png"



const Home = () => {
    return (
        <div className="bg-body-400 font-main" >
            <div className="navbar-hero-container">
                <Navbar />
                <Hero />
            </div>
            <div className="h-[100vh] w-screen flex flex-col items-center justify-center">
                <h2 className="text-body-800 font-bold text-3xl pt-8"> Featured Properties</h2>
                <p className="text-body-500 mt-2">Handpicked properties by our team</p>
                <div>
                    <CarouselComponent />
                </div>
                {/* Cities */}
            </div>
            <div className="bg-body-300">
                <div className="text-center pt-12">
                    <h2 className="text-body-800 font-bold text-3xl pt-12">Find Properties in These Cities</h2>
                    <p className="text-body-500 mt-2">Handpicked properties by our team</p>
                </div>
                <div className="px-6 py-12 lg:px-40 lg:py-20">
                    <div className="block lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className=" h-[60vh] lg:h-[40vh] overflow-hidden lg:col-span-1 rounded-lg relative">
                            <div className={`h-[100%] w-[100%] carousel-1 rounded-lg hover:transform hover:scale-110 transition-transform ease-in-out duration-500`}>

                            </div>
                            <div className="absolute bottom-8 text-center left-[38%]">
                                <h2 className="text-body-300 text-lg font-bold">Miami</h2>
                                <p className="text-body-300 font-light">24 properties</p>
                            </div>
                        </div>
                        <div className=" mt-4 h-[40vh] overflow-hidden lg:col-span-2 lg:mt-0 rounded-lg relative">
                            <div className="h-[100%] w-[100%] carousel-2 rounded-lg hover:transform hover:scale-110  transition-transform ease-in-out duration-500">

                            </div>
                            <div className="absolute bottom-8 text-center left-[38%]">
                                <h2 className="text-body-300 text-lg font-bold">Los Angeles</h2>
                                <p className="text-body-300 font-light">18 properties</p>
                            </div>
                        </div>
                        <div className="mt-4 h-[40vh] overflow-hidden lg:col-span-2 lg:mt-0 rounded-lg relative">
                            <div className="h-[100%] w-[100%] carousel-3 rounded-lg hover:transform hover:scale-110 transition-transform ease-in-out duration-500">

                            </div>
                            <div className="absolute bottom-8 text-center left-[38%]">
                                <h2 className="text-body-300 text-lg font-bold">New York</h2>
                                <p className="text-body-300 font-light">89 properties</p>
                            </div>
                        </div>
                        <div className="mt-4 h-[60vh] lg:h-[40vh] overflow-hidden lg:col-span-1 lg:mt-0 rounded-lg relative">
                            <div className="h-[100%] w-[100%] carousel-4 rounded-lg hover:transform hover:scale-110 transition-transform ease-in-out duration-500">

                            </div>
                            <div className="absolute bottom-8 text-center left-[38%]">
                                <h2 className="text-body-300 text-lg font-bold">Florida</h2>
                                <p className="text-body-300 font-light">47 properties</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            {/* Choose Us */}
            <div className="bg-body-400">
                <div className="text-center pt-12">
                    <h2 className="text-body-800 font-bold text-3xl pt-10">Why Choose Us</h2>
                    <p className="text-body-500 mt-2">We provide full service at every step.</p>
                </div>
                <div className="md:mx-[20vh] mx-4 my-10 lg:flex lg:gap-6" >
                    <div className="bg-body-300 text-center rounded-lg flex flex-col items-center mb-5 shadow-md city">
                        <div className="my-11">
                            <GiHighFive className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon" />
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Trusted By Thousands</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>
                    <div className="bg-body-300 text-center rounded-lg flex flex-col items-center mb-5 shadow-md city">
                        <div className="my-11">
                            <GiHouse className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon" />
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Wide Range Of Properties</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>
                    <div className="bg-body-300 text-center rounded-lg flex flex-col items-center mb-5 shadow-md city">
                        <div className="my-11">
                            <GiCalculator className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon" />
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Financing Made Easy</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>


                </div>
            </div>
            {/* Partners */}
            <div className="bg-body-300">
                <div className="text-center pt-10">
                    <h2 className="text-body-800 font-bold text-3xl pt-10">Our Partners</h2>
                    <p className="text-body-500 mt-2">We only work with the best companies around the globe</p>
                </div>

                <div className="py-20 sm:px-20 md:px-30 lg:px-40 flex flex-col flex-wrap items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center">
                    <img src={Partner1} />
                    <img src={Partner2} />
                    <img src={Partner3} />
                    <img src={Partner4} />
                    <img src={Partner5} />
                </div>

            </div>
            {/* Become an agent */}
            <div className="bg-cred-500 flex flex-col gap-6 items-center pb-5 sm:flex-row sm:justify-between sm:pl-20 sm:pr-60 sm:items-center justify-center">
                <div className="text-center pt-10 sm:pt-0 ">
                    <h2 className="text-body-300 font-bold text-3xl pt-10">Become a Real Estate Agent</h2>
                    <p className="text-body-400 text-sm mt-2">We only work with the best companies around the globe</p>
                </div>
                <div className="pt-6">
                    <button className="py-4 px-10 bg-cred-400 rounded-lg text-body-300 hover:bg-body-300 hover:text-cred-500">Register Now</button>
                </div>
            </div>
            {/* footer */}
            <div className="bg-cblue-900 px-5 lg:px-16  xl:px-32 py-20 flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between">
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">About Site</h2>
                    <p className="text-body-500 text-sm font-light mt-6">We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
                </div>
                <div className="sm:max-w-sm flex flex-col">
                    <h2 className="text-body-300 font-bold text-lg">Quick Links</h2>
                    <ul className="list-none">
                        <li className="mt-6 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">About Us</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">Terms & Conditions</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">User's Guide</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">Support Center</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">Press Info</a>
                        </li>
                    </ul>
                </div>
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">Contact Us</h2>
                    <ul className="list-none">
                        <li className="mt-6 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="poludiran@gmail.com">info@home.com</a>
                        </li>
                        <li className="mt-4 hover:translate-x-2 transform">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">Collins Street West, Victoria</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="/">8007, Australia.</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="tel:+15877858144">+1 246-345-0699</a>
                        </li>
                        <li className="mt-4 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="tel:+15877858144">+1 246-345-0695</a>
                        </li>
                    </ul>

                </div>
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">Follow Us</h2>
                    <div className="mt-6 flex gap-2">
                        <AiOutlineFacebook className="text-body-500 hover:text-body-400"/>
                        <AiOutlineInstagram className="text-body-500 hover:text-body-400"/>
                        <AiOutlineTwitter className="text-body-500 hover:text-body-400"/>
                    </div>
                </div>
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">Subscribe</h2>
                    <div className="mt-6 flex items-center">
                        <input className="bg-cblue-1000 p-3 rounded-full" type="email" placeholder="Your email" />
                        <button className="m-2 p-3 bg-cblue-1000 rounded-full text-body-500 hover:bg-cred-500"><AiFillCaretRight/></button>
                    </div>
                </div>
            </div>

            <footer>

            </footer>
        </div>
    )
}

export default Home