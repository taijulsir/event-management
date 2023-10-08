import "./gallery.css"
import "../Home/Team.css"
import {AiOutlineCalendar,AiOutlineFieldTime,AiFillCheckCircle  } from "react-icons/ai";


const Booking = () => {

   
  
    return (
        <div>

            {/* banner section */}
            <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/M7NMXwh/booking.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-pink-600 font-bold"> INSTANT ONLINE BOOKING</h1>
                        <p className="mb-5">A wedding is not just a ceremony; it`s a celebration of love, promising a forever filled with happiness and laughter..</p>
                    </div>
                </div>
            </div>

            {/* venues item */}

            <h1 className="text-3xl font-bold text-center mt-16 mb-7">Select Your Venue type</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-5 lg:px-[150px] mb-16">
               <div className="image-container">
                <img className="h-[300px] w-[700px] hover-image " src="https://i.ibb.co/nbZ3DqM/Affordable-Wedding-Venues-in-USA.jpg" alt="" />
                <p className="text-2xl font-bold text-center mt-2">Sea Beach</p>
               </div>
               <div className="image-container">
                <img  className="h-[300px] w-[700px] hover-image " src="https://i.ibb.co/rwjM6Jj/weddings-venues-snip-four-peaks-view-lawn-11.jpg" alt="" />
                <p className="text-2xl font-bold text-center mt-2">Natural Hill</p>
               </div>
               <div className="image-container">
                <img className="h-[300px] w-[700px] hover-image " src="https://i.ibb.co/f4WRJ9K/15-SWH-Wedding-Chapel-033.jpg" alt="" />
                <p className="text-2xl font-bold text-center mt-2">Beautiful Sands</p>
               </div>
            </div>

            {/* Destination */}

            <h1 className="text-3xl font-bold text-center text-pink-400 mt-16 mb-7">Destination</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5 lg:px-[150px] mb-16">
                <div>
                    <img className="lg:w-[600px] testimonial" src="https://i.ibb.co/f24Zq3N/Greece-Destination-2small.png" alt="" />
                    <p className="  text-2xl hover:text-blue-500   font-semibold  ">Greece</p>
                </div>

                <div>
                    <img className="lg:w-[600px] testimonial" src="https://i.ibb.co/rpDNC7v/Cyprus-destinationsmall.png" alt="" />
                    <p className="  text-2xl hover:text-blue-500   font-semibold  ">Cyprus</p>
                </div>

                <div>
                    <img className="lg:w-[600px] testimonial" src="https://i.ibb.co/FDqFyxB/mexico-destination.jpg" alt="" />
                    <p className="  text-2xl hover:text-blue-500   font-semibold  ">Mexico</p>
                </div>

                <div>
                    <img className="lg:w-[600px] testimonial" src="https://i.ibb.co/wdRqJHF/Dominican.jpg" alt="" />
                    <p className="  text-2xl hover:text-blue-500   font-semibold  ">Dominician Republic</p>
                </div>
            </div>

            {/* Order Confirmation */}

            <h1 className="text-center text-4xl text-pink-400 font-bold">Organizing a wedding always starts <br /> with a confirmed date!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center container mx-auto gap-5 lg:px-[150px] mt-10 mb-16">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-5xl text-pink-600 mb-3 "><AiOutlineCalendar></AiOutlineCalendar></p>
                        <p className="text-2xl font-medium text-[#403F3F]">Enter your preferred <br /> wedding date and venue.</p>
                    </div>
                    <div  className="flex flex-col items-center justify-center">
                        <p className="text-5xl text-pink-600 mb-3 "><AiOutlineFieldTime></AiOutlineFieldTime></p>
                        <p className="text-2xl font-medium text-[#403F3F]">Check availability  <br />over a 3-week period.</p>
                    </div>
                    <div  className="flex flex-col items-center justify-center">
                        <p  className="text-5xl text-pink-600 mb-3 "><AiFillCheckCircle></AiFillCheckCircle></p>
                        <p className="text-2xl font-medium text-[#403F3F]">Book online and receive <br /> confirmation instantly.</p>
                    </div>
            </div>
           
         
        </div>
    );
};

export default Booking;