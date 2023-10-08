
import './Team.css'
const Faq = () => {
    return (
        <div>
            <h1  className="text-4xl text-center font-bold mb-16">Frequently Ask Questions</h1>
            <div className="container mx-auto lg:w-3/4">
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300 main">
                    <input type="radio" name="my-accordion-4" defaultChecked checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How far in advance should I book your services for my wedding or birthday event?
                    </div>
                    <div className="collapse-content">
                        <p className=" text-lg font-medium text-[#403F3F]">Booking our services well in advance is advisable, ideally 6 to 12 months ahead, especially if you have a specific date or venue in mind. Early booking allows us to secure the best vendors, venues, and resources for your event. However, if you`re planning a last-minute event, please contact us, and we`ll do our best to accommodate your needs while ensuring a successful celebration.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 main">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can you help with both wedding and birthday event planning?
                    </div>
                    <div className="collapse-content">
                        <p className=" text-lg font-medium text-[#403F3F]">Absolutely! We take pride in our versatility and expertise in planning various types of events. Whether it`s a grand wedding celebration or an intimate birthday party, our team is equipped to make your vision a reality. Our experience extends to crafting unique and personalized experiences for each occasion.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 main">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    What services do you offer for wedding and birthday events?
                    </div>
                    <div className="collapse-content">
                        <p className=" text-lg font-medium text-[#403F3F]">The cost of our event management services varies based on several factors, including the scale of the event, the specific services you require, and your location. We believe in providing transparent pricing and tailored solutions. After an initial consultation to understand your needs and preferences, we`ll provide you with a detailed quote that aligns with your budget and expectations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 main">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can I customize the theme and décor for my event?
                    </div>
                    <div className="collapse-content">
                        <p className=" text-lg font-medium text-[#403F3F]"> Certainly! We understand that managing a budget is a crucial aspect of event planning. Our experienced team can help you create a comprehensive budget plan that considers all necessary elements, from venue selection to catering, entertainment, and decor. We`re committed to helping you optimize your budget, ensuring you get the most value out of every dollar spent, while still delivering a remarkable and memorable celebration.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 main">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do I get started with your event planning services?
                    </div>
                    <div className="collapse-content">
                        <p className=" text-lg font-medium text-[#403F3F]"> Getting started with us is a straightforward process. You can reach out to us through our website`s contact form or give us a call. We`ll promptly schedule an initial consultation at your convenience. During this consultation, we`ll discuss your event ideas, preferences, and any specific requirements you have in mind. Our aim is to gain a deep understanding of your vision so that we can create a personalized event plan that brings your dreams to life. From there, we`ll guide you through every step of the planning process, making it a stress-free and enjoyable experience for you.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;