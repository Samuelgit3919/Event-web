import { IoStarSharp } from "react-icons/io5";

function Testimonials() {
    return (
        <div className="mt-5 container  mx-auto px-4 md:px-24 py-12 ">
            <h1 className="font-bold text-2xl text-center">Customers Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                    </div>
                    <p className="mt-4 text-sm md:text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                        corrupti inventore ducimus labore fuga odio ullam tempore dolor
                        perspiciatis, repudiandae, iste dignissimos harum alias qui. Quam
                        ratione eos expedita impedit!
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src="https://i.pinimg.com/564x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg"
                            alt=""
                        />
                        <div>
                            <p className="font-semibold">John Math</p>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                        <IoStarSharp className="text-yellow-400 w-6 h-6" />
                    </div>
                    <p className="mt-4 text-sm md:text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                        corrupti inventore ducimus labore fuga odio ullam tempore dolor
                        perspiciatis, repudiandae, iste dignissimos harum alias qui. Quam
                        ratione eos expedita impedit!
                    </p>
                    <div className="flex items-center mt-4">
                        <img
                            className="w-12 h-12 rounded-full mr-4"
                            src="https://i.pinimg.com/564x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg"
                            alt=""
                        />
                        <div>
                            <p className="font-semibold">John Math</p>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
