import { FaPerson } from "react-icons/fa6";
import { GiMagnet } from "react-icons/gi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function FirstEvent() {
    return (
        <div className="bg-gray-50 flex flex-col pt-12 pb-12 p-5 px-4 md:px-8">
            {/* Header Section */}
            <div className="flex flex-col items-center mt-12  text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold">
                    Create and Manage Your Community Events
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl">
                    Welcome to the Event Management Dashboard. Easily create and organize your events.
                </p>
            </div>

            {/* Call to Action Section */}
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 md:mx-24 gap-24 mt-12 p-6 rounded-lg shadow-lg md:px-12 lg:px-44">
                <p className="text-lg text-gray-700 p-2">
                    Jump into organizing exciting local events and engage with your community.
                </p>

                <button className="bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">
                    <Link
                        to="/event"

                    >
                        Create your Event
                    </Link>
                </button>

            </div>

            {/* Main Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 p-2 md:px-12 lg:px-44">
                {/* Left Content */}
                <div className="flex flex-col justify-between space-y-8">
                    <div className="space-y-5">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Creating Memorable Events for the Community
                        </h1>
                        <p className="text-gray-600">
                            Events bring people together, foster connections, and create lasting
                            memories. They play a vital role in building a vibrant community.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 py-4">
                        <div className="flex-1 text-center py-2 space-y-2">
                            <GiMagnet className="text-7xl mx-auto text-blue-500" />
                            <h3 className="font-semibold text-lg">Engage</h3>
                            <p className="text-gray-600">
                                Connect with like-minded individuals and expand your network through
                                exciting events.
                            </p>
                        </div>
                        <div className="flex-1 text-center py-2 space-y-2 mt-6 sm:mt-0">
                            <FaPerson className="text-7xl mx-auto text-blue-500" />
                            <h3 className="font-semibold text-lg">Discover</h3>
                            <p className="text-gray-600">
                                Explore new interests, hobbies, and passions by attending a diverse
                                range of events.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        className="md:h-[450px] md:w-[450px] w-full object-cover rounded-lg shadow-lg"
                        src="https://i.pinimg.com/736x/33/f0/8c/33f08cba685ff0661d6bc9137c85bc53.jpg"
                        alt="Community Event"
                    />
                </div>
            </div>

            {/* Contact Section */}
            <div className="mt-20 px-4 md:px-12 lg:px-44">
                <div className="text-center mb-12">
                    <p className="text-xl font-semibold text-gray-800">Connect</p>
                    <h1 className="text-3xl font-extrabold mt-2">Get in Touch</h1>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        For any inquiries, please let us know. We're here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <MdEmail className="text-4xl text-blue-500" />
                        <h2 className="font-semibold text-lg">Email</h2>
                        <p className="text-gray-600">
                            Send us an email and we'll get back to you.
                        </p>
                        <a href="mailto:hello@localeventhub.com" className="text-blue-500 hover:underline">
                            hello@localeventhub.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <MdPhone className="text-4xl text-blue-500" />
                        <h2 className="font-semibold text-lg">Phone</h2>
                        <p className="text-gray-600">
                            Give us a call during business hours.
                        </p>
                        <a href="tel:+251111111111" className="text-blue-500 hover:underline">
                            +251 111 111 111
                        </a>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <MdLocationOn className="text-4xl text-blue-500" />
                        <h2 className="font-semibold text-lg">Location</h2>
                        <p className="text-gray-600">
                            Visit us at our office for any in-person inquiries.
                        </p>
                        <h4 className="text-blue-500">Bole, Addis Abeba, Ethiopia</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstEvent;
