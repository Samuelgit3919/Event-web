// import React from 'react'
import SwiperComponent from "../common/swipper/SwiperComponent";
import { data } from "../Discovery/Discovery";
import { useParams } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaPhone, FaTshirt } from 'react-icons/fa';
import { FaBan, FaWater } from "react-icons/fa6";

function ProductDetails() {
    const { id } = useParams();
    const van = data.find(v => v.id === id);  // Find the van by id

    return (
        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
            {van ? (
                <div className="bg-white mt-12 shadow-md rounded-lg p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{van.title} 2024</h1>
                    <img src={van.img} alt={van.name} className="w-full md:h-[650px] rounded-lg mb-6" />

                    <div className="mb-8 md:flex justify-start md:space-x-12 items-center">
                        <p className="flex items-center text-lg">
                            <FaCalendarAlt className="mr-2 text-blue-500 text-xl" /> Date: {van.category.date}
                        </p>
                        <p className="flex items-center text-lg">
                            <FaClock className="mr-2 text-blue-500 text-xl" /> Time: {van.time}
                        </p>
                        <p className="flex items-center text-lg">
                            <FaMapMarkerAlt className="mr-2 text-blue-500 text-xl" /> Venue: {van.location}
                        </p>
                    </div>

                    <div className="md:flex md:space-x-52">
                        <div className="mb-8 md:w-full">
                            <button className="bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition">Get your Ticket</button>
                            <div className="mt-6">
                                <h2 className="text-lg font-bold">Contact Us for Registration and Ticketing</h2>
                                <p className="flex items-center mt-2 text-lg">
                                    <FaFacebook className="mr-2 text-blue-700 text-xl hover:text-blue-900 transition" /> Dm us @Eventshub
                                </p>
                                <p className="flex items-center mt-2 text-lg">
                                    <FaWhatsapp className="mr-2 text-green-500 text-xl hover:text-green-700 transition" /> +251922937282
                                </p>
                                <p className="flex items-center mt-2 text-lg">
                                    <FaPhone className="mr-2 text-green-500 text-xl hover:text-green-700 transition" /> +251922937282
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h1 className="text-xl font-bold ">About This Event</h1>
                                <p>{van.description}</p>

                                <h2 className="text-lg font-semibold mt-4 mb-2">Event Schedule</h2>
                                {van.time && <p>Time: {van.time}</p>}

                                <h2 className="text-lg font-bold mt-6 mb-2">Event Terms and Regulation</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repudiandae voluptatum itaque. Deserunt necessitatibus doloribus reprehenderit laboriosam quos voluptatem quaerat quibusdam distinctio, officiis nemo eius vel. Minima molestiae reiciendis unde?</p>

                                <h2 className="text-lg font-bold mt-6 mb-2">Prohibited Items</h2>
                                <p className="flex items-center text-lg">
                                    <FaBan className="mr-2 text-red-500 text-xl" /> Cannabis
                                </p>
                                <p className="flex items-center text-lg">
                                    <FaBan className="mr-2 text-red-500 text-xl" /> Tobacco
                                </p>
                                <p className="flex items-center text-lg">
                                    <FaBan className="mr-2 text-red-500 text-xl" /> Alcohol
                                </p>
                                <p className="flex items-center text-lg">
                                    <FaBan className="mr-2 text-red-500 text-xl" /> Adult Entertainment
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg font-bold mt-6 mb-2">Amenities</h2>
                                <p className="flex items-center text-lg">
                                    <FaTshirt className="mr-2 text-purple-500 text-xl" /> T-shirt
                                </p>
                                <p className="flex items-center text-lg">
                                    <FaWater className="mr-2 text-blue-500 text-xl" /> Bottle of water
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold mt-6">{van.category?.name}</h2>
                </div>
            ) : <h2 className="text-center text-lg">Loading...</h2>}

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Events</h2>
                <SwiperComponent />
            </div>
        </div>
    );
}

export default ProductDetails;
