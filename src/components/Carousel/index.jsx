import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card';

const CarouselComponent = () => {
    const cardGroup = [
        {
            type: "Apartment", price: "$13000", img: "src/assets/featured Pages/vu-anh-TiVPTYCG_3E-unsplash.jpg", name: "Luxury Family Home", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "1", bath: "1", sqft: "8280", profileImg: "src/assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"sale"
        },
        {
            type: "Bungalow", price: "$14000", img: "src/assets/featured Pages/todd-kent-178j8tJrNlc-unsplash.jpg", name: "Renovated Apartment", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "2", bath: "2", sqft: "5280", profileImg: "src/assets/featured Pages/ryan-hoffman-Ft4p5E9HjTQ-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Bungalow", price: "$13000", img: "src/assets/featured Pages/spacejoy-XpbtQfr9Skg-unsplash.jpg", name: "Single Family Home", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "3", bath: "2", sqft: "3280", profileImg: "src/assets/featured Pages/jason-moyer-A73ah5JKtVA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        }, 
        {
            type: "House", price: "$11000", img: "src/assets/featured Pages/spacejoy-uGWNcejbf2E-unsplash.jpg", name: "Gorgeous Villa Bay View", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "5", bath: "5", sqft: "5280", profileImg: "src/assets/featured Pages/jason-moyer-A73ah5JKtVA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Land", price: "$17000", img: "src/assets/featured Pages/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg", name: "Renovated Apartment", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "4", sqft: "6280", profileImg: "src/assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Single Family Home", price: "$16000", img: "src/assets/featured Pages/sidekix-media-wRzBarqn3hs-unsplash.jpg", name: "Gorgeous Villa Bay View", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "2", sqft: "9500", profileImg: "src/assets/featured Pages/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        }, 
        {
            type: "Apartment", price: "$15000", img: "src/assets/featured Pages/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg", name: "Renovated Apartment", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "3", sqft: "10280", profileImg: "src/assets/featured Pages/ryan-hoffman-Ft4p5E9HjTQ-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Condo", price: "$12000", img: "src/assets/featured Pages/r-architecture-2gDwlIim3Uw-unsplash.jpg", name: "Gorgeous Villa Bay View", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "2", sqft: "6880", profileImg: "src/assets/featured Pages/jason-moyer-A73ah5JKtVA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Single Family Home", price: "$14000", img: "src/assets/featured Pages/kara-eads-L7EwHkq1B2s-unsplash.jpg", name: "Renovated Apartment", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "6", sqft: "12000", profileImg: "src/assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        }, 
        {
            type: "Apartment", price: "$15000", img: "src/assets/featured Pages/greg-rivers-rChFUMwAe7E-unsplash.jpg", name: "Luxury Family Home", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "6", sqft: "5280", profileImg: "src/assets/featured Pages/alexander-hipp-iEEBWgY_6lA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Villa", price: "$19000", img: "src/assets/featured Pages/fomstock-4ojhpgKpS68-unsplash.jpg", name: "Renovated Apartment", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "1", sqft: "5280", profileImg: "src/assets/featured Pages/ryan-hoffman-Ft4p5E9HjTQ-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        },
        {
            type: "Bungalow", price: "$13000", img: "src/assets/featured Pages/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg", name: "Luxury Family Home", location: "1421 San Pedro St, Los Angeles CA 900015", beds: "4", bath: "2", sqft: "5280", profileImg: "src/assets/featured Pages/jason-moyer-A73ah5JKtVA-unsplash.jpg", profileName: "Ali Tufan", date: "1 year ago", mode:"rent"
        }
    

    ];
    
        
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className='w-[80vw]'>
            <Slider {...settings}>
                {cardGroup.map((card, j) => (
                            <Card
                                key={j}
                                type={card.type}
                                price={card.price}
                                img={card.img}
                                name={card.name}
                                location={card.location}
                                beds={card.beds}
                                baths={card.bath}
                                sqft={card.sqft}
                                profileimg={card.profileImg}
                                profilename={card.profileName}
                                date={card.date}
                                mode={card.mode}
                            />
                        ))}
               
            </Slider>
        </div>
    );
};

export default CarouselComponent;