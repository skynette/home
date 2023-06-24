import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiFillCaretRight } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
        <div className="bg-cblue-900 px-5 lg:px-16  xl:px-32 py-20 flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between">
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">About Site</h2>
                    <p className="text-body-500 text-sm font-light mt-6">We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</p>
                </div>
                <div className="sm:max-w-sm flex flex-col">
                    <h2 className="text-body-300 font-bold text-lg">Quick Links</h2>
                    <ul className="list-none">
                        <Link to="/">
                            <li className="mt-6 transform hover:translate-x-2 text-body-500 text-sm font-light hover:text-body-400">About Us</li>
                        </Link>
                        <Link to="/">
                            <li className="mt-4 transform hover:translate-x-2 text-body-500 text-sm font-light hover:text-body-400">Terms & Conditions</li>
                        </Link>
                        <Link to="/">
                            <li className="mt-4 transform hover:translate-x-2 text-body-500 text-sm font-light hover:text-body-400">User's Guide</li>
                        </Link>
                        <Link to="/">
                            <li className="mt-4 transform hover:translate-x-2 text-body-500 text-sm font-light hover:text-body-400">Support Center</li>
                        </Link>
                        <Link to="/">
                            <li className="mt-4 transform hover:translate-x-2 text-body-500 text-sm font-light hover:text-body-400">Press Info</li>
                        </Link>
                    </ul>
                </div>
                <div className="sm:max-w-sm">
                    <h2 className="text-body-300 font-bold text-lg">Contact Us</h2>
                    <ul className="list-none">
                        <li className="mt-6 transform hover:translate-x-2">
                            <a className="text-body-500 text-sm font-light hover:text-body-400" href="mailto:poludiran@gmail.com">info@home.com</a>
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
                        <input className="bg-cblue-1000 p-3 rounded-full text-body-400" type="email" placeholder="Your email" />
                        <button className="m-2 p-3 bg-cblue-1000 rounded-full text-body-500 hover:bg-cred-500"><AiFillCaretRight/></button>
                    </div>
                </div>
            </div>

            <footer className="bg-cblue-1000">
                <p className="text-sm text-body-500 py-10 text-center">&copy; 2023 Your Company Name. All rights reserved.</p>
            </footer>
    </div>
  )
}

export default Footer