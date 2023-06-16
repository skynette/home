import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import CarouselComponent from "../../components/Carousel"
import { GiHighFive, GiHouse, GiCalculator } from 'react-icons/gi'



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
                    <CarouselComponent/>
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
                            <GiHighFive className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon"/>
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Trusted By Thousands</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>
                    <div className="bg-body-300 text-center rounded-lg flex flex-col items-center mb-5 shadow-md city">
                        <div className="my-11">
                            <GiHouse className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon"/>
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Wide Range Of Properties</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>
                    <div className="bg-body-300 text-center rounded-lg flex flex-col items-center mb-5 shadow-md city">
                        <div className="my-11">   
                             <GiCalculator className="p-6 rounded-full bg-cred-200 h-[130px] w-[130px] text-cred-500 cicon"/> 
                        </div>
                        <h2 className="text-body-800 font-bold text-lg mb-3">Financing Made Easy</h2>
                        <p className="text-body-800 text-sm px-10 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate libero doloribus</p>
                    </div>
                    

                </div>
            </div>

            <h1>Home</h1>
        </div>
    )
}

export default Home