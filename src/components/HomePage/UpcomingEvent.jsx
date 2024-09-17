import React from "react";

const UpcomingEvent = () => {
    const data = [
        {
            img: "https://i.pinimg.com/564x/59/62/a1/5962a10ec960a3dd9980617ffdf932b8.jpg",
            title: "Exhibition",
            subtitle: "Experience the Architectural Event Scene",
            description:
                "Discover exciting events happening in your community and get inspired.",
        },
        {
            img: "https://i.pinimg.com/564x/fb/29/a5/fb29a550b7d5475c2f05ae6ef0fc2caf.jpg",
            title: "Movie Night",
            subtitle: "Movie Night Ceremony",
            description:
                "Discover the best concerts in town and immerse yourself in live music.",
        },
        {
            img: "https://i.pinimg.com/564x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg",
            title: "Concert",
            subtitle: "Music and Dance Concert",
            description:
                "Enjoy an evening filled with vibrant music and performances.",
        },
    ];

    return (
        <section className="container mx-auto mt-12 md:px-12 lg:px-44 mb-32 px-4">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="font-bold text-4xl md:text-5xl text-gray-800 leading-tight">
                    Discover <br /> Upcoming Events
                </h2>
                <p className="text-gray-600 text-lg mt-2">
                    Don't miss out on these exciting upcoming events near you!
                </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="group border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Event Image */}
                        <img
                            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            src={item.img}
                            alt={`${item.title} event`}
                            loading="lazy"
                        />

                        {/* Event Content */}
                        <div className="p-6 bg-white">
                            <p className="bg-blue-100 text-blue-600 font-semibold text-sm inline-block px-3 py-1 rounded-full mb-3">
                                {item.title}
                            </p>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.subtitle}
                            </h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center items-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    View More Events
                </button>
            </div>
        </section>
    );
};

export default UpcomingEvent;
