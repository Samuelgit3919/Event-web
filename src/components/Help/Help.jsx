// import React, { useState } from 'react';
// import Navbar from '../common/Navigation/Navbar';
// import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
function Help() {
    const articles = [
        "How to Access and Navigate the \"My Messages\" Inbox [Organizer]",
        "Step 1: Get Approved. What does my order status mean?",
        "Step 2: Pay (view your invoice, make changes and pay)",
        "Step 3: Completing Paperwork (upload, download, e-sign and other actions)",
        "How to Access My Hub and Manage Your Orders",
        "Step 4: Complete Floor Plan Public Profile (Edit and View)",
        "Step 5 or 6: Review Event Logistics Info (booth #, load-in/out and more)",
        "How to Search for an Event in our Marketplace and Apply to Exhibit",
        "Have an Event Related Question? Learn How to Message the Event Organizer"
    ];

    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <section
                    className="mb-14 bg-cover bg-center flex items-center  justify-center text-white"
                    style={{ backgroundImage: "url('https://i.pinimg.com/564x/92/57/6b/92576be9601f00886b03e58363369647.jpg')", height: '60vh' }}
                >
                    <div className="bg-opacity-0 backdrop-blur-sm flex flex-col md:flex-row justify-between w-full max-w-screen-xl items-center px-6 md:px-12 py-8">
                        <div className="mr-0 md:mr-5 font-bold text-3xl md:text-4xl leading-snug w-full md:w-2/5">
                            <form action="">
                                <div className="relative flex items-center">
                                    <FiSearch className="absolute top-1/2 transform text-xl  -translate-y-1/2 left-3 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full pl-14 pr-4 text-xl py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className='p-5 md:mx-28 container-fluid flex flex-wrap '>
                    <div className='text-center m-5 border-2 border-[#1f73b7] p-4 cursor-pointer flex-1 min-w-[280px] md:w-1/3 hover:bg-[#1f73b7] hover:text-white'>
                        <h1 className='font-bold p-2'>I'm an Event Organizer</h1>
                        <p>Find guidance on creating and editing your event, managing submissions, and more</p>
                    </div>
                    <div className='text-center m-5 border-2 border-[#1f73b7] p-4 cursor-pointer flex-1 min-w-[280px] md:w-1/3  hover:bg-[#1f73b7] hover:text-white'>
                        <h1 className='font-bold p-2'>I'm an Event Organizer</h1>
                        <p>Find guidance on creating and editing your event, managing submissions, and more</p>
                    </div>
                    <div className='text-center m-5 border-2 border-[#1f73b7] p-4 cursor-pointer flex-1 min-w-[280px] md:w-1/3  hover:bg-[#1f73b7] hover:text-white'>
                        <h1 className='font-bold p-2'>I'm an Event Organizer</h1>
                        <p>Find guidance on creating and editing your event, managing submissions, and more</p>
                    </div>
                </section>
                <section>
                    <div className="max-w-7xl mx-auto p-6">
                        <h2 className="text-xl font-bold mb-4">Promoted Articles</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {articles.map((article, index) => (
                                <li key={index} className="relative p-4  rounded-lg shadow-sm">
                                    <p className="text-lg">{article}</p>
                                    {index < articles.length - 1 && (
                                        <hr className="mt-4 border-t border-gray-300" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
        </div>

    );
}

export default Help;
