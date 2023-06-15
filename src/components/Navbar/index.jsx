import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const flexBetween = "flex justify-between items-center";
	const navigate = useNavigate();
	const loginNav = () => {
		navigate("/login");
	};

	return (
		<div className="border-b border-body-500">
			<div className="w-5/6 mx-auto">
				<nav className={`h-16 ${flexBetween}`}>
					{/* left side */}
					<div>
						<h1 className="text-2xl text-white hover:cursor-pointer">
							Home
						</h1>
					</div>

					{/* right side */}
					<div className={`hidden md:block ${flexBetween}`}>
						<ul className={`${flexBetween} gap-4`}>
							<li className="text-white">About</li>
							<li className="text-white">Contact</li>
							<li className="text-white" onClick={loginNav}>
								Login
							</li>
						</ul>
					</div>

					<div className={`hidden md:${flexBetween} gap-2`}>
						<h1 className="text-white px-2 py-1 rounded-md border border-white mr-4 hover:cursor-pointer hover:bg-body-300 hover:text-body-600">
							+ Add Listing
						</h1>
						<FaUserCircle className="text-cblue-500 h-7 w-7" />
					</div>

					<div className="hover:cursor-pointer md:hidden">
						<AiOutlineMenu className="text-white h-7 w-7" />
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
