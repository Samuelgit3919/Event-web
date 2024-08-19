import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Products({ products }) {
    return (
        <section className='grid grid-cols-1 lg:mx-24 md:mx-24 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 sm:gap-4 p-4 lg:ml-[20rem] md:ml-[10rem]'>
            {products.map((product) => (
                <div
                    key={product.id}
                    className='max-w-xs lg:max-w-sm w-full border border-[#ededed] rounded-lg overflow-hidden mx-auto shadow-sm cursor-pointer'>

                    <img
                        src={product.img}
                        className='w-full h-52 object-cover'
                        alt={product.title}
                    />
                    <div className="p-4">
                        <h3 className='text-lg font-semibold text-gray-700 mb-2'>{product.title}</h3>
                        <div className='flex items-center text-yellow-500 mb-2'>
                            {product.star}
                            <span className='ml-2 text-sm text-gray-600'>{product.reviews}</span>
                        </div>
                        <div className="text-gray-600 text-sm space-y-2">
                            <p className='flex items-center'>
                                <FaLocationDot className='text-red-500 mr-2' />
                                {product.location}
                            </p>
                            <p className='flex items-center'>
                                <MdDateRange className='mr-2' />
                                {product.date}
                            </p>
                            <p className='flex items-center'>
                                <IoMdTime className='mr-2' />
                                {`${product.time} Time`}
                            </p>
                        </div>
                        <Link
                            to={`/products/${product.id}`}
                            className='block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors'>
                            <span className='flex items-center justify-center'>
                                Detail <IoIosArrowForward className='ml-2' />
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </section>

    );
}

export default Products;
