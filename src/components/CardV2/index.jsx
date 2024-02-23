import React from "react";
import { useNavigate } from "react-router-dom";

const CardV2 = (props) => {
	const {
		price,
		img,
		mode,
        name
	} = props;

	const navigate = useNavigate();

	const handleClick = () =>{
		navigate("/house/123");
	}

	return (
		<div onClick={handleClick} className="h-[28vh] w-[100%] bg-body-300 m-auto transform hover:scale-[1.02] hover:transition-transform hover:duration-500 rounded-lg mb-2 flex flex-col items-center justify-center font-main">
			<div className="m-2 h-[98%] w-[95%] overflow-hidden">
				<div className="w-[100%] h-[100%] relative">
					<img
						src={img}
						className="w-[100%] h-[100%] object-cover rounded-lg"
					/>
                    <div className="absolute bottom-2 left-6 z-1">
                        <h3 className="font-bold text-body-300 text-xl">
						    {price}/<span className="text-lg">mo</span>
					    </h3>
                        <h3 className="font-bold text-body-300 text-lg">{name}</h3>
                    </div>
					
					<div className="flex gap-2 text-sm absolute top-5 left-6">
						<div className="bg-cblue-500 p-1 text-center rounded-sm text-body-300">
							Featured
						</div>
						<div className="bg-cred-500 text-center rounded-sm p-1 text-body-300">
							For {mode}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardV2;
