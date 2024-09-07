import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className=" mb-24 bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage:
                    "url('https://i.pinimg.com/564x/92/57/6b/92576be9601f00886b03e58363369647.jpg')",
                height: "60vh",
            }}
            role="banner"
            aria-label="Discover Exciting Local Events"
        >
            <div className="bg-opacity-0 backdrop-blur-sm flex flex-col md:flex-row justify-between container items-center px-6 md:px-12 py-8">
                <div className="mr-0 md:mr-5 font-bold text-3xl md:text-4xl leading-snug w-full md:w-2/5">
                    <h1>Discover Exciting Local Events Near You</h1>
                </div>
                <div className="leading-7 md:leading-9 font-semibold w-full md:w-2/5 mt-4 md:mt-0 sm:w-full">
                    <p>
                        Explore a wide range of concerts, festivals, workshops, and
                        community gatherings happening in your area. Find the perfect
                        event to attend and make unforgettable memories.
                    </p>
                    <div className="mx-4 mt-8 px-4 flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/register"
                            className="bg-green-500 hover:bg-green-600 focus:bg-green-700 px-5 py-2 rounded-md transition-colors duration-300 text-center"
                            aria-label="Join Event"
                        >
                            Login
                        </Link>
                        <Link
                            to='/firstEvent'
                            className="bg-red-700 hover:bg-red-800 focus:bg-red-900 px-5 py-2 rounded-md transition-colors duration-300 text-center"
                            aria-label="Sign Up for Event"
                        >
                            Create Event
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
