import React from 'react';

function More() {
    return (
        <section className="px-4 py-8">
            <div className="max-w-6xl mx-auto mt-16">
                <h1 className="text-center font-bold text-3xl mb-8">Learn More</h1>
                <div className="space-y-12 py-5">
                    {/* Introduction Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Welcome to EventHub</h2>
                        <p>
                            Welcome to [Event Hub Name], your ultimate destination for discovering, promoting, and managing local events. Whether you're an event organizer, a performer, or an attendee, we provide the tools and information you need to make your event experience seamless and enjoyable.
                        </p>
                        <hr className="w-1/2 mx-auto border-t-4 border-gray-300 my-4" />
                    </div>
                    {/* About Us Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">About Us</h2>
                        <p>
                            EventHub was founded in [Year] with the mission of connecting communities through events. We believe in the power of local gatherings to foster connections, celebrate culture, and create lasting memories. Our platform is designed to make it easy for everyone to find, share, and participate in events that matter to them.
                        </p>
                        <hr className="w-1/2 mx-auto border-t-4 border-gray-300 my-4" />
                    </div>
                </div>

                {/* Content Sections */}
                <div className="mt-12 py-8 space-y-16">
                    {/* Section 1 */}
                    <div className="md:flex mb-8 justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-5xl text-gray-400">01</h1>
                            <h3 className="text-2xl font-semibold">Discover Events</h3>
                            <p>Browse a comprehensive calendar of local events, including concerts, festivals, workshops, and more.</p>
                            <p>Filter events by category, date, location, and popularity to find exactly what you're looking for.</p>
                            <p>Get personalized recommendations based on your interests and past activities.</p>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <img src="../../../public/images/more1.png" alt="Discover Events" className="w-full h-auto rounded-lg shadow-md" />
                            <h3 className="text-2xl font-semibold mt-4">Ticketing And Registration</h3>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="md:flex justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
                        <div className="flex-1 text-center md:text-left">
                            <img src="../../../public/images/more2.png" alt="Engage With Community" className="w-[340px] mx-auto h-[450px] rounded-lg shadow-md" />
                            <h3 className="text-2xl font-semibold mt-4">Ticketing And Registration</h3>
                        </div>
                        <div className="flex-1 space-y-4">
                            <h1 className="text-5xl text-gray-400">02</h1>
                            <h3 className="text-2xl font-semibold">Manage Events</h3>
                            <p>Effortlessly manage your events, from creating event pages to tracking ticket sales and attendees.</p>
                            <p>Access real-time analytics to understand your audience and improve future events.</p>
                            <p>Utilize our tools for promotions, registrations, and ticketing to maximize your event's reach.</p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="md:flex mt-8 justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-5xl text-gray-400">03</h1>
                            <h3 className="text-2xl font-semibold">Engage With Your Community</h3>
                            <p>Connect with attendees through our platform's interactive features, such as live chat and feedback forms.</p>
                            <p>Build a loyal community by engaging with your audience before, during, and after events.</p>
                            <p>Use our community-building tools to foster relationships and encourage repeat attendance.</p>
                        </div>
                        <div className="flex-1 text-center md:text-left ">
                            <img src="../../../public/images/more3.png" alt="Engage With Community" className="w-[340px] mx-auto h-[450px] rounded-lg shadow-md" />
                            <h3 className="text-2xl font-semibold mt-4">Community Engagement</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default More;
