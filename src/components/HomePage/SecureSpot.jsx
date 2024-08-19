// import React from 'react';
import { SiEasyeda } from 'react-icons/si';
import { IoTicketOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function SecureSpot() {
    return (
        <div className="container mx-auto">
            {/* First Section: Discover Events */}
            <div className="grid grid-cols-1 p-2 md:grid-cols-2 gap-5 mb-12 md:px-12 lg:px-44">
                <img
                    className="md:h-[450px] md:w-[450px] w-full object-cover"
                    src="https://i.pinimg.com/564x/9d/8a/f4/9d8af446a7e8f27aef89e57e31c2fb02.jpg"
                    alt="Discover Events"
                />
                <div className="h-[450px] flex flex-col justify-between py-8 space-y-5">
                    <div>
                        <h3 className="font-semibold text-gray-600">Discover</h3>
                        <h1 className="text-3xl font-bold">
                            Find Local Events Tailored to Your Interests
                        </h1>
                        <p>
                            Looking for exciting events in your area? Our event search functionality
                            allows you to easily find concerts, festivals, workshops, and community
                            gatherings that match your interests. Whether you're a music lover, a
                            foodie, or an art enthusiast, we've got you covered.
                        </p>
                    </div>
                    <div className="flex space-x-5">
                        <button className="border-2 border-gray-400 p-1 px-4 bg-blue-500 hover:bg-blue-400 text-white transition-colors">
                            Learn More
                        </button>
                        <button >
                            <Link
                                className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                                to='/register'>
                                Sign Up <IoIosArrowForward className="ml-2" />
                            </Link>

                        </button>
                    </div>
                </div>
            </div>

            {/* Second Section: Secure Your Spot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 mb-12 md:px-12 lg:px-44">
                <div className="flex flex-col justify-between">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold">
                            Secure Your Spot at Exciting Events
                        </h1>
                        <p>
                            Our event RSVP and ticketing system makes it easy for you to secure
                            your spot at your favorite events. Simply browse through our curated
                            selection, choose the events you want to attend, and reserve your
                            tickets hassle-free.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 py-4">
                        <div className="flex-1 text-center py-2 space-y-2">
                            <SiEasyeda className="text-7xl mx-auto text-blue-500" />
                            <h3 className="font-semibold text-lg">Easy RSVP</h3>
                            <p className="text-gray-600">
                                RSVP to events with just a few clicks and guarantee your spot.
                            </p>
                        </div>
                        <div className="flex-1 text-center py-2 space-y-2">
                            <IoTicketOutline className="text-7xl mx-auto text-blue-500" />
                            <h3 className="font-semibold text-lg">Ticketing Made Simple</h3>
                            <p className="text-gray-600">
                                Purchase tickets conveniently and securely through our platform.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    className="md:h-[450px] md:w-[450px] w-full object-cover"
                    src="https://i.pinimg.com/736x/33/f0/8c/33f08cba685ff0661d6bc9137c85bc53.jpg"
                    alt="Secure Your Spot"
                />
            </div>
        </div>
    );
}

export default SecureSpot;
