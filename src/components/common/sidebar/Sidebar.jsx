import { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false); // State to control the sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleFilterClick = (filter) => {
        // Handle filter logic here
        console.log(`${filter} filter clicked`);
        setIsOpen(false); // Close the sidebar after clicking a filter button
    };

    return (
        <>
            {/* Toggle button for smaller screens */}
            <button
                className="fixed top-[4em] left-1 z-50 text-3xl md:hidden"
                onClick={toggleSidebar}
                style={{ display: isOpen ? 'none' : 'block' }}
            >
                <MdKeyboardDoubleArrowRight className='md:hidden' />
            </button>

            <section
                className={`fixed top-[3.8em] md:top-[0.7em] sm:top-[0em] left-0 h-full bg-white border-r-[2px] border-t-0 border-r-[#e5e5e5] transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:w-[15%] md:translate-x-0 md:border-r-0 md:border-t`}
            >
                <div className="p-6">
                    <h1 className='mt-2 mb-4 text-2xl font-semibold'>Filter</h1>

                    <div className='mb-5'>
                        <h2 className='font-bold text-lg'>DEADLINE DATE</h2>
                        <hr className='mb-4' />
                        {["Sooner First", "Today", "This Weekend", "This Week", "This Month"].map((date, index) => (
                            <button
                                key={index}
                                className='block text-left w-full py-0 px-4 rounded-md border-none border-gray-300 mb-2 hover:bg-gray-200'
                                onClick={() => handleFilterClick(date)}
                            >
                                {date}
                            </button>
                        ))}
                    </div>

                    <div className='mb-5'>
                        <h2 className='font-bold text-lg'>LOCATION</h2>
                        <hr className='mb-4' />
                        {["Addis Abeba", "Adama"].map((location, index) => (
                            <button
                                key={index}
                                className='block text-left w-full py-0 px-4 rounded-md border-none border-gray-300 mb-2 hover:bg-gray-200'
                                onClick={() => handleFilterClick(location)}
                            >
                                {location}
                            </button>
                        ))}
                    </div>

                    <div className='mb-12'>
                        <h2 className='font-bold text-lg'>TIME</h2>
                        <hr className='mb-4' />
                        {["Day", "Night"].map((time, index) => (
                            <button
                                key={index}
                                className='block text-left w-full py-0 px-4 rounded-md border-none border-gray-300 mb-2 hover:bg-gray-200'
                                onClick={() => handleFilterClick(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    <div>
                        <button className='bg-gray-400 px-4 py-2 w-full rounded-md flex items-center gap-2 text-white hover:bg-gray-500'>
                            <CiLogout /> Logout
                        </button>
                    </div>
                </div>
            </section>

            {/* Overlay when the sidebar is open on small screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
}

export default Sidebar;
