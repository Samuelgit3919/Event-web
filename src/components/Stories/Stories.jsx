// import React from 'react';
import { SlArrowRight } from "react-icons/sl";

function Stories() {
    const data = [
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2023/10/Yucaipa-Autumn-Fest-Map.png',
            title: 'How SacPride DOUBLED Vendors and Revenue in One Year',
            date: '21st, 2024 | Categories: Testimonial',
            detail: 'Sacramento Pride Festival 2023: Massive Growth and Success Type of Event: Annual Non-profit Pride Parade and Festival Attendance: 22,000+ Venue: Downtown Sacramento (outdoor) Affiliations: InterPride Member Overview: Sacramento Pride, put on by the Sacramento LGBTQ Community Center and led [...]'
        },
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2024/02/Sacramento-Pride-March-and-Festival_4107__1680207977__5dm39676.jpg',
            title: 'Yuengling Shamrock Marathon Leverages EventHub to Sell Out Booth Space',
            date: '30th, 2024 | Categories: Testimonials',
            detail: 'Meet: Yuengling Shamrock Marathon (by J&A Racing) Type of Event: Endurance road race and expo Attendance: 30,000 Affiliations: Running USA Overview: Every March Virginia Beach-based J&A Racing produces its annual flagship event, the Yuengling Shamrock Marathon. The race features [...]'
        },
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2024/01/5Y4A5331-copy.jpg',
            title: 'City Park and Recreation Event Software Success Story',
            date: 'By EventHub Content Team | October 9th, 2023 | Categories: Testimonials',
            detail: 'Customer Success Story: City of Yucaipa Community Events Type of Events: Fall festival, country music festival, holiday festivals Attendance: 5000-10,000+ Number of booths: 50-100+ Venue: City parks and main streets Affiliations: California Park and Recreation Society, CalFest Overview: The City of [...]'
        },
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2023/10/Yucaipa-Autumn-Fest-Map.png',
            title: 'Fair Vendor Management: Carolina Classic Swings for the Fences and Hits it Out of the Park',
            date: 'By EventHub Content Team | June 8th, 2023 | Categories: Testimonials',
            detail: 'Meet: The Carolina Classic Fair Type of Event: Agricultural fair, second largest fair in the State of North Carolina. Attendance: 300,000+ Affiliations: https://carolinaclassicfair.com/ Overview: The Carolina Classic Fair is the 2nd largest fair in North Carolina with an average annual [...]'
        },
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2023/07/Screen-Shot-2023-07-13-at-12.34.15-PM.png',
            title: 'Managing Vendors: Bay Area Festivals Success Story',
            date: 'By EventHub Content Team | April 28th, 2023 | Categories: Testimonials',
            detail: 'Meet: Bay Area Festivals Types of Events: Book fairs, Oktoberfest, Spring Festivals, Homeshows, Halloween Cons, Jazz Festivals Attendance: 750-20,000 Affiliations: CalFest.org Overview: Bay Area Festivals, led by owner Jay Bedecarre, has produced nearly 100 festivals, fairs and special events around [...]'
        },
        {
            img: 'https://blog.eventhub.net/wp-content/uploads/2023/04/Bay-Area-Festivals-KidFest-1200x828.jpg',
            title: 'How SacPride DOUBLED Vendors and Revenue in One Year',
            date: '21st, 2024 | Categories: Testimonial',
            detail: 'Sacramento Pride Festival 2023: Massive Growth and Success Type of Event: Annual Non-profit Pride Parade and Festival Attendance: 22,000+ Venue: Downtown Sacramento (outdoor) Affiliations: InterPride Member Overview: Sacramento Pride, put on by the Sacramento LGBTQ Community Center and led [...]'
        },
    ];

    return (
        <div className='p-4 mx-auto sm:max-w-screen-xl sm:w-1100'>
            <div className='text-center mb-8 mt-24'>
                <h1 className='text-3xl font-bold mb-4 bg-[#ebebeb] p-2'>Success Stories</h1>
                <button className='bg-[#4ac591] text-white px-4 py-2 rounded font-bold'>Request Free Demo</button>
            </div>
            <div className="text-[#e4e0e0] bg-[#ebebeb] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-5">
                {data.map((item, index) => (
                    <div key={index} className='border-2 bg-slate-50  border-black  overflow-hidden  sm:max-w-lg mx-auto'>
                        <div className='p-1' style={{ height: '635px' }}>
                            <img src={item.img} alt={item.title} className='w-full  h-40 sm:h-340 object-cover mb-4' />
                            <div className='p-4'>
                                <h2 className='text-lg sm:text-xl text-black font-bold mb-2'>{item.title}</h2>
                                <p className='text-gray-500 text-xs sm:text-sm mb-2'>{item.date}</p>
                                <hr className='border-t-2 border-gray-400 mb-4' />
                                <p className='text-gray-700 text-xs sm:text-sm mb-4'>{item.detail}</p>
                                <a href="#" className='text-blue-700 flex items-center text-xs sm:text-sm float-right'>
                                    Read more <SlArrowRight className='ml-1' />
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
                <div>
                    {/* team image and text  here */}
                </div>
            </div>
        </div >
    );
}

export default Stories;
