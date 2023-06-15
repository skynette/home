import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const flexBetween = "flex justify-between items-center";
	const navigate = useNavigate();
	const loginNav = () => {
		navigate("/login");
	};
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="border-b border-body-500 relative">
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

					<div className={`hidden md:flex md:items-center gap-2`}>
						<h1 className="text-white px-2 py-1 rounded-md border border-white mr-4 hover:cursor-pointer hover:bg-body-300 hover:text-body-600">
							+ Add Listing
						</h1>
						<FaUserCircle className="text-cblue-500 h-7 w-7" />
					</div>

					<div className="hover:cursor-pointer md:hidden">
						{!isNavOpen && (
							<AiOutlineMenu
								className="text-white h-7 w-7"
								onClick={() => setIsNavOpen(!isNavOpen)}
							/>
						)}
					</div>

					<div
						className={`fixed top-0 left-0 z-[20] w-3/4 h-[100vh] bg-white transform transition-transform duration-300 ${
							isNavOpen ? "translate-x-0" : "-translate-x-full"
						} nav-menu`}
					>
						{/* Navigation menu content */}
						<div className="flex justify-between items-center h-16 px-4 border-b">
							<h1 className="text-2xl text-cred-500">Home</h1>
							<MdClose
								className="text-black h-7 w-7"
								onClick={() => setIsNavOpen(!isNavOpen)}
							/>
						</div>
            <div className="bg-body-300 hover:cursor-pointer">
              <ul className="flex flex-col justify-center items-start gap-4">
                <li className="text-body-800 py-2 px-4 border-b w-full">About</li>
                <li className="text-body-800 py-2 px-4 border-b w-full">Contact</li>
                <li className="text-body-800 py-2 px-4 border-b w-full" onClick={loginNav}>
                  Login
                </li>
              </ul>
            </div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
