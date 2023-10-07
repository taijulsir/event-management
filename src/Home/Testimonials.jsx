import Rating from 'react-rating';
import { BsQuote } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Testimonials = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center font-bold mb-16">What`s Our Client Says</h1>



            <div className="flex flex-col items-center justify-center lg:gap-8">
                {/* 1st testimonial */}
                <div className=" relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 "  data-aos="fade-up-left">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16 mb-5">
                            <div className="font-bold text-3xl text-center pb-1">Silene Tokyo</div>
                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal"> <BsQuote className="mr-2 text-5xl"></BsQuote>The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>

                           <div className='text-center mt-4'>
                           <Rating
                            className=' text-amber-400'
                                stop={5}
                                initialRating={5}
                                emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                                fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                            />
                           </div>

                        </div>
                    </div>
                </div>

                {/* 2nd testimonial */}
                <div className="relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"  data-aos="fade-up-right"  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16 mb-5">
                            <div className="font-bold text-3xl text-center pb-1">Silene Tokyo</div>
                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal"> <BsQuote className="mr-2 text-5xl"></BsQuote>The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                            <div className='text-center mt-4'>
                           <Rating
                            className=' text-amber-400'
                                stop={5}
                                initialRating={4.5}
                                emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                                fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                            />
                           </div>

                        </div>
                    </div>
                </div>
                {/* 3rd testimonial */}
                <div className=" relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"  data-aos="zoom-in-up" >
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16 mb-5">
                            <div className="font-bold text-3xl text-center pb-1">Silene Tokyo</div>
                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal"> <BsQuote className="mr-2 text-5xl"></BsQuote>The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                            <div className='text-center mt-4'>
                           <Rating
                            className=' text-amber-400'
                                stop={5}
                                initialRating={4}
                                emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
                                    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
                                    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
                                fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
                                    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
                                    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
                            />
                           </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Testimonials;