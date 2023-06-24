import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardV2 from "../CardV2";
import cardGroup from "../../constants/cards";

const CarouselV2 = () => {
	

	const slide = cardGroup.slice(0,5);

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className="w-[90%] mt-4">
			<Slider {...settings}>
				{slide.map((card, j) => (
					<CardV2
						key={j}
						price={card.price}
						img={card.img}
						name={card.name}
						mode={card.mode}
					/>
				))}
			</Slider>
		</div>
	);
};

export default CarouselV2;
