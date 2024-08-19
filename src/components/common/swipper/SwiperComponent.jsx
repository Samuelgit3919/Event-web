// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SwiperComponent() {
    const images = [
        'https://i.pinimg.com/736x/e6/6c/46/e66c4631b0eb000028a85d654fee2e63.jpg',
        'https://i.pinimg.com/564x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg',
        'https://i.pinimg.com/564x/e2/47/12/e2471241cb461e47b4a80e6f7c5ce287.jpg',
        'https://i.pinimg.com/564x/59/62/a1/5962a10ec960a3dd9980617ffdf932b8.jpg',
        'https://i.pinimg.com/564x/77/71/f8/7771f899e263f0247dc766f8baba4aa9.jpg',
        'https://i.pinimg.com/564x/fb/29/a5/fb29a550b7d5475c2f05ae6ef0fc2caf.jpg',
    ];

    return (
        <div>

            <h1 className='md:ml-[18rem]   font-bold uppercase text-4xl pl-[2.4rem]'>Featured Event</h1>
            <div className="w-full py-8 flex flex-wrap justify-center lg:justify-start gap-4 md:px-[2.4rem] lg:px-[5rem]">
                <Swiper
                    // slidesPerView={4}
                    // spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="w-full"
                    breakpoints={{
                        540: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        678: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex p-1 md:p-1 lg:p-2 justify-center items-center bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-[350px] h-[400px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
