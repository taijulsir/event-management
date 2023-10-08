import Rating from 'react-rating';
import { BsQuote } from "react-icons/bs";
import './Team.css'



const Testimonials = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center font-bold mb-16">Testimonials</h1>



            {/* 1st testimonial */}
            <div className='flex md:flex-row flex-col justify-between items-center bg-base-200 shadow-2xl rounded-lg lg:w-3/5  mx-auto py-10 px-5 gap-10 md:gap-20'  data-aos="fade-up-right"  data-aos-duration="5000">
                <img className='h-[300px] w-[239px] rounded-2xl' src="https://i.ibb.co/tXc165W/1671983278614.jpg" alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>Ayman Sadiq</h1>
                    <p className='text-lg font-medium mb-5'>Sales manager</p>
                    <h1 className='text-2xl text-[#403F3F] my-5 font-semibold'>A Dream Wedding Brought to Life</h1>
                    <p><BsQuote className=' text-3xl'></BsQuote></p>
                    <p className='text-xltext-[#403F3F] my-5'>Planning a wedding can be incredibly overwhelming, but Botanica Wedding made the entire process seamless and enjoyable. Their attention to detail and commitment to understanding our vision was evident from the first meeting. They took the time to sit down with us and really listen to what we wanted, and they provided valuable insights and suggestions that we hadn`t even considered.</p>
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
            {/* 2nd testimonial */}
            <div className='flex md:flex-row flex-col justify-between items-center bg-base-200 shadow-2xl rounded-lg lg:w-3/5  mx-auto py-10 px-5 gap-10 md:gap-20 mt-5'  data-aos="zoom-in-up"  data-aos-duration="5000">
                <img className='h-[300px] w-[239px] rounded-2xl' src="https://i.ibb.co/dPVVMn5/serv-1.png" alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>Sarah Johnson</h1>
                    <p className='text-lg font-medium mb-5'>Marketing Director</p>
                    <h1 className='text-2xl text-[#403F3F] my-5 font-semibold'>Exceptional Wedding Experience</h1>
                    <p><BsQuote className=' text-3xl'></BsQuote></p>
                    <p className='text-xltext-[#403F3F] my-5'>The quality of service provided by Botanica Wedding extended beyond the planning and execution of the event itself. They also helped us with budget management, ensuring that we stayed within our financial means while still achieving our dream wedding. Their expertise in negotiating with vendors and their knowledge of cost-saving strategies were invaluable.</p>
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
    );
};

export default Testimonials;