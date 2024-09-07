import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className="bg-gray-200 px-6 md:px-12 py-8 text-gray-600">
            <div className="max-w-7xl mx-auto">
                {/* Top Border */}
                <div className="border-b border-gray-400 w-full mb-8"></div>

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    {/* Logo Section */}
                    <p className="text-black text-3xl md:text-5xl font-bold">ASTUVENT</p>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 text-sm md:text-base">
                        <li className="hover:underline cursor-pointer">About Us</li>
                        <li className="hover:underline cursor-pointer">Contact Us</li>
                        <li className="hover:underline cursor-pointer">Events</li>
                        <li className="hover:underline cursor-pointer">FAQs</li>
                        <li className="hover:underline cursor-pointer">Blogs</li>
                    </ul>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 md:space-x-6 text-xl">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                            <CiInstagram />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                            <RiTwitterXLine />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="border-b border-gray-400 w-full my-8"></div>

                {/* Legal and Policy Links */}
                <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-center text-xs md:text-sm">
                    <p>&copy; 2024 ASTUVENT. All rights reserved.</p>
                    <a href="#" className="underline hover:text-black transition-colors">Privacy Policy</a>
                    <a href="#" className="underline hover:text-black transition-colors">Terms and Conditions</a>
                    <a href="#" className="underline hover:text-black transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
