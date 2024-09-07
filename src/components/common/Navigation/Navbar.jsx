import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "green"
    }



    return (
        <header className="bg-white text-black shadow-md cursor-pointer fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
                {/* Logo */}
                <Link to="/" className="text-lg font-bold">EventHub</Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 font-semibold">
                    <NavLink
                        to="/"
                        className="hover:underline underline-offset-2  decoration-green-500 decoration-2"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Home
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? activeStyles : null}
                        to="/discovery"
                        className="hover:underline underline-offset-2  decoration-green-500 decoration-2">
                        Discovery
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? activeStyles : null}
                        to="/stories"
                        className="hover:underline underline-offset-2  decoration-green-500 decoration-2">
                        Stories
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? activeStyles : null}
                        to="/blog"
                        className="hover:underline underline-offset-2  decoration-green-500 decoration-2">
                        Blog
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? activeStyles : null}
                        to="/help"
                        className="hover:underline underline-offset-2  decoration-green-500 decoration-2">
                        Help Center
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="outline-none mobile-menu-button"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="space-y-1">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-4 text-sm hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/discovery"
                                className="block py-2 px-4 text-sm hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                Discovery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/stories"
                                className="block py-2 px-4 text-sm hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="block py-2 px-4 text-sm hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/help"
                                className="block py-2 px-4 text-sm hover:bg-gray-100"
                                onClick={closeMenu}
                            >
                                Help Center
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
