import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import CarouselComponent from "../../components/Carousel"

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

            </div>

            <h1>Home</h1>
        </div>
    )
}

export default Home