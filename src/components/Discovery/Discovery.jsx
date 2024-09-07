
import Sidebar from "../common/sidebar/Sidebar"
import Products from "../Products/Products"
import SwiperComponent from "../common/swipper/SwiperComponent";
import { AiFillStar } from 'react-icons/ai';
import { useState } from "react";



export const data = [
    {
        id: "1",
        img: "https://i.pinimg.com/736x/e6/6c/46/e66c4631b0eb000028a85d654fee2e63.jpg",
        title: "Discussion",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Adama",
        date: "today",
        category: {
            name: 'discussion',
            date: 'upcoming',

        },
    },
    {
        id: "2",
        img: "https://i.pinimg.com/564x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg",
        title: "Music Event",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Adama",
        date: "sooner First",
        category: {
            name: 'concert',
            date: 'recommended'
        }
    },
    {
        id: "3",
        img: "https://i.pinimg.com/564x/e2/47/12/e2471241cb461e47b4a80e6f7c5ce287.jpg",
        title: "Dance Event",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "night",
        location: "Addis Abeba",
        date: "This Week",
        category: {
            name: 'music',
            date: 'recommended'
        }
    },
    {
        id: "4",
        img: "https://i.pinimg.com/564x/59/62/a1/5962a10ec960a3dd9980617ffdf932b8.jpg",
        title: "Art Exhibition",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Addis Abeba",
        date: "This Month",
        category: {
            name: 'art',
            date: 'upcoming'
        }
    },
    {
        id: "5",
        img: "https://i.pinimg.com/564x/77/71/f8/7771f899e263f0247dc766f8baba4aa9.jpg",
        title: "Football Match",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "night",
        location: "Adama",
        date: "Today",
        category: {
            name: 'sport',
            date: 'recommended'
        }
    },
    {
        id: "6",
        img: "https://i.pinimg.com/564x/fb/29/a5/fb29a550b7d5475c2f05ae6ef0fc2caf.jpg",
        title: "Movie Night",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Addis Abeba",
        date: "This month",
        category: {
            name: 'movie',
            date: 'upcoming'
        }
    },
    {
        id: "7",
        img: "https://i.pinimg.com/564x/f3/46/ed/f346ed180f85e5eb1576514d2f335a81.jpg",
        title: "Architectural Exhibition",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "night",
        location: "Adama",
        date: "This Week",
        category: {
            name: 'art',
            date: 'recommended'
        }
    },
    {
        id: "8",
        img: "https://i.pinimg.com/564x/6f/90/49/6f90496ff5bf6d68410c4217ca95fe8a.jpg",
        title: "Programming Contest",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Addis Abeba",
        date: "sooner First",
        category: {
            name: 'festival',
            date: 'upcoming'
        }
    },
    {
        id: "9",
        img: "https://i.pinimg.com/564x/0c/dc/7f/0cdc7fba52bc9e0e8610258b63f0d62b.jpg",
        title: "Ethiopian Great Run",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "day",
        location: "Adama",
        date: "Today",
        category: {
            name: 'sport',
            date: 'recommended'
        }
    },
    {
        id: "10",
        img: "https://i.pinimg.com/564x/8c/d3/79/8cd379feb761b6411014b178e7061a97.jpg",
        title: "Music Concert",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "night",
        location: "Adama",
        date: "This Month",
        category: {
            name: 'music',
            date: 'upcoming'
        }
    },
    {
        id: "11",
        img: "https://i.pinimg.com/564x/8f/9c/02/8f9c02408a85c837be8beca6c708c3c0.jpg",
        title: "Birthday Party",
        star: <AiFillStar className="rating-star" />,
        reviews: "(123 reviews)",
        time: "night",
        location: "Addis Abeba",
        date: "This Week",
        category: {
            name: 'sport',
            date: 'upcoming'
        }
    },
];


function Discovery() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isRecommended, setIsRecommended] = useState(false);
    const [isUpcoming, setIsUpcoming] = useState(false);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const toggleRecommended = () => {
        setIsRecommended(prev => !prev);
        if (!isRecommended) setIsUpcoming(false);
    };

    const toggleUpcoming = () => {
        setIsUpcoming(prev => !prev);
        if (!isUpcoming) setIsRecommended(false);
    };

    const resetFilters = () => {
        setSelectedCategory('');
        setIsRecommended(false);
        setIsUpcoming(false);
    };

    const filteredProducts = data.filter(product => {
        const categoryMatch = selectedCategory ? product.category.name === selectedCategory : true;
        const recommendedMatch = isRecommended ? product.category.date === 'recommended' : true;
        const upcomingMatch = isUpcoming ? product.category.date === 'upcoming' : true;
        return categoryMatch && recommendedMatch && upcomingMatch;
    });



    return (
        <>
            <div className="h-full sm:space-y-12 py-14 md:py-8">
                <Sidebar className="" />
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:ml-[20rem] mt-4">
                    <button
                        className={`px-4 py-2 text-sm lg:text-base ${isRecommended ? 'bg-blue-500 text-white' : 'bg-transparent text-[#323232]'} border border-[#ccc] rounded-md cursor-pointer`}
                        onClick={toggleRecommended}
                    >
                        Recommended
                    </button>
                    <button
                        className={`px-4 py-2 text-sm lg:text-base ${isUpcoming ? 'bg-blue-500 text-white' : 'bg-transparent text-[#323232]'} border border-[#ccc] rounded-md cursor-pointer`}
                        onClick={toggleUpcoming}
                    >
                        Upcoming
                    </button>
                    <select
                        className='px-4 py-2 text-sm lg:text-base bg-transparent border border-[#ccc] rounded-md text-[#323232] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="">All</option>
                        <option value="sport">Sport</option>
                        <option value="movie">Movie</option>
                        <option value="music">Music</option>
                        <option value="concert">Concert</option>
                        <option value="discussion">Discussion</option>
                        <option value="festival">Festival</option>
                    </select>

                    <button
                        className="px-4 py-2 text-sm lg:text-base bg-red-500 text-white border hover:bg-red-700 border-[#ccc] rounded-md cursor-pointer"
                        onClick={resetFilters}
                    >
                        Reset Filters
                    </button>
                </div>

                <Products products={filteredProducts} />
                <SwiperComponent />

            </div>
        </>
    );
}

export default Discovery;