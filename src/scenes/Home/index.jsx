import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"

const Home = () => {
    return (
        <div>
            <div className="navbar-hero-container">
                <Navbar />
                <Hero />
            </div>
            <h1>Home</h1>
        </div>
    )
}

export default Home