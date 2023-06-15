import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import cardGroup from "../../constants/cards";

const CarouselComponent = () => {
	const [slides, setSlides] = useState(3);

	useEffect(() => {
		function updateSlides() {
			const screenWidth = window.innerWidth;

			if (screenWidth < 768) {
				setSlides(1);
			} else if (screenWidth < 1024) {
				setSlides(2);
			} else {
				setSlides(3);
			}
		}

		updateSlides();

		window.addEventListener("resize", updateSlides);

		return () => {
			window.removeEventListener("resize", updateSlides);
		};
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: slides,
	};

	return (
		<div className="w-[80vw]">
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
