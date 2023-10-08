import { useLoaderData, useParams } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineStar, AiFillEye } from "react-icons/ai";

const BlogDetails = () => {
    const blogs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const blog = blogs.find(blogDetails => blogDetails.id === idInt)
    const { image, description, published_date, tags } = blog
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4">
            <div className=" col-span-3 mt-10 px-3">
                {/* description section */}
                <img className="lg:w-[900px]" src={image} alt="" />
                <div className="flex gap-5 my-3 text-[#403F3F] text-base">
                    <p className="bg-red-400 rounded-full text-center text-white px-4">{published_date}</p>
                    <span>|</span>
                    <p>Admin</p>
                </div>
                <p className="lg:w-4/5 text-lg text-[#403F3F] mb-2">{description}</p>
                <a href="" className="text-[#403F3F] text-base ">Tags: #{tags[0]}</a>

                {/* related post section */}
                <h1 className="my-10 text-3xl font-semibold">Related Post</h1>
                <div className="grid  grid-cols-1 md:grid-cols-2 mb-5 gap-2 ">
                    <div className=" rounded-lg">
                        <img className="h-[400px] w-[450px]" src="https://i.ibb.co/1rkDvry/blog3.jpg" alt="" />
                        <p className=" text-lg lg:text-xl text-[#403F3F] mb-2 font-bold">Turning a Profit in the Event Planning Business</p>

                    </div>
                    <div className=" rounded-lg">
                        <img className="h-[400px] w-[450px]" src="https://i.ibb.co/zhB9Ww2/blog2.jpg" alt="" />
                        <p className=" text-lg  lg:text-xl text-[#403F3F] mb-2 font-bold">Hiring an Events Planner</p>
                    </div>
                </div>

                {/* comment section */}
                <h1 className="my-10 text-3xl  font-semibold">Add Comment </h1>
                <p className="lg:px-5 text-lg text-[#403F3F] mb-4">Your email address will not be published. Required fields are marked *</p>
                <div>
                    <input type="text" placeholder="comment" className="lg:w-4/5 w-full h-20 px-4  text-xl bg-base-200  shadow-md outline-none" />
                    <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                        <input type="text" placeholder="Name*" className="h-10 px-4 text-xl bg-base-200 shadow-md outline-none " />
                        <input type="text" placeholder="Email*" className="h-10 px-4 text-xl bg-base-200 shadow-md outline-none " />
                    </div>
                    <div className="mt-4">
                        <label>
                            <input type="checkbox" name="" id="" /> By using this form you agree with the storage and handling of your data by this website Privacy Policy. *
                        </label>
                    </div>
                    <button className="mt-4 bg-[#403F3F] btn text-white mb-6">Post Comment</button>
                </div>

            </div>

            {/* right side items */}
            <div className="px-3">


                    {/* category item */}
                    <div>
                        <h1 className="text-3xl font-semibold my-6">Categories</h1>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>Bridal Shoot</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>Wedding Event</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>Anniversary Event</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>Birthday Event</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>Wedding Photography</p>

                    </div>

                    {/* recent posts */}
                    <div>
                        <h1 className="text-3xl font-semibold my-6">Recent Posts</h1>
                        <hr />

                        <h3 className="text-xl font-semibold my-6">How to Start an Event Planning Service</h3>
                        <div className="flex gap-5 text-[#403F3F] text-base mb-6">
                            <p className="text-red-600 font-medium">AUG 5, 2015 <span>|</span></p>
                            <p>Admin <span>|</span></p>
                            <p className="flex  items-center"><AiFillEye className="mr-1"></AiFillEye>25</p>
                        </div>

                        <h3 className="text-xl font-semibold mb-6">Turning a Profit in the Event Planning Business</h3>
                        <div className="flex gap-5  text-[#403F3F] text-base mb-6">
                            <p className="text-red-600 font-medium">AUG 5, 2015 <span>|</span></p>
                            <p>Admin <span>|</span></p>
                            <p className="flex  items-center"><AiFillEye className="mr-1"></AiFillEye>35</p>
                        </div>

                        <h3 className="text-xl font-semibold mb-6">Hiring an Events Planner</h3>
                        <div className="flex gap-5 text-[#403F3F] text-base mb-6">
                            <p className="text-red-600 font-medium">AUG 5, 2015 <span>|</span></p>
                            <p>Admin <span>|</span></p>
                            <p className="flex  items-center"><AiFillEye className="mr-1"></AiFillEye>45</p>
                        </div>

                    </div>

                    {/* tags */}
                    <div>
                        <h1 className="text-2xl font-semibold mt-8 mb-6">Tags</h1>
                        <hr />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Wedding</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Anniversary</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Business</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Birthday</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Retires</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Business</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Wedding</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Anniversary</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Birthday</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Decoration</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Party</a>

                        </div>
                    </div>

                    {/* images */}
                    <div className="grid grid-cols-3 mt-8">
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/zhB9Ww2/blog2.jpg" alt="" />
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/QvFVpqW/aniversary.jpg" alt="" />
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/RH9LxNk/id2-4.jpg" alt="" />
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/HT1NR9R/wedding22.jpg" alt="" />
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/Fq0QWHG/id3-2.jpg" alt="" />
                        <img className="h-[80px] w-[200px]" src="https://i.ibb.co/YfJzCDs/wedding.jpg" alt="" />

                    </div>

                    {/* popular items */}
                    <div>
                        <h1 className="text-2xl font-semibold mt-8 mb-6">Popular</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Views</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Comments</a>
                            <a className=" bg-gray-200 border rounded-3xl text-center" href="">Like</a>
                        </div>
                        {/* image and title 1 */}
                        <div className="flex gap-5 mt-6">
                            <img className="h-[80px] w-[100px]" src="https://i.ibb.co/zhB9Ww2/blog2.jpg" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold mb-4">How to Start an Event Planning Service</h3>
                                <div className="flex gap-5 text-[#403F3F] text-base mb-6">
                                    <p className="text-red-600 font-medium">AUG 5, 2015 <span>|</span></p>
                                    <p>Admin <span>|</span></p>
                                    <p className="flex  items-center"><AiFillEye className="mr-1"></AiFillEye>495</p>
                                </div>
                            </div>
                        </div>
                        {/* image and title 2 */}
                        <div className="flex gap-5 mt-6">
                            <img className="h-[80px] w-[100px]" src="https://i.ibb.co/YfJzCDs/wedding.jpg" alt="" />
                            <div>
                                <h3 className="text-xl font-semibold mb-4">How to Start an Event Planning Service</h3>
                                <div className="flex gap-5 text-[#403F3F] text-base mb-6">
                                    <p className="text-red-600 font-medium">AUG 5, 2015 <span>|</span></p>
                                    <p>Admin <span>|</span></p>
                                    <p className="flex  items-center"><AiFillEye className="mr-1"></AiFillEye>45</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* archives */}
                    <div >
                        <h1 className="text-2xl font-semibold my-6">Archives</h1>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>November 2020</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>December 2021</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>January 2020</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>February 2022</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>November 2020</p>
                        <p className="flex items-center text-lg font-medium text-[#403F3F] mb-2 px-3"><AiFillCheckCircle className="text-yellow-400 mr-2 text-2xl"></AiFillCheckCircle>September 2020</p>
                    </div>

                    {/* rating */}
                    <div>
                        <h1 className="text-2xl font-semibold my-6">Rating</h1>
                        {/* 1st rating */}
                        <div >
                            <div className="flex items-center gap-5 mt-6" >
                                <img className="h-[80px] w-[100px]" src="https://i.ibb.co/p39JXPS/anniversarry2.jpg" alt="" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">How to Start an Event Planning Service</h3>
                                    <p className="flex text-xl text-sky-400"><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></p>
                                </div>
                            </div>
                            <div className="flex gap-5 text-[#403F3F] text-base mt-4 mb-6">
                                <p className="text-red-600">AUG 5, 2015 <span>|</span></p>
                                <p>Admin</p>
                            </div>
                        </div>

                        {/* 2nd rating */}
                        <div >
                            <div className="flex items-center gap-5 mt-6" >
                                <img className="h-[80px] w-[100px]" src="https://i.ibb.co/g3bLTZp/birht.jpg" alt="" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Best Choice for Children`s Party</h3>
                                    <p className="flex text-xl text-sky-400"><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar><AiOutlineStar></AiOutlineStar></p>
                                </div>
                            </div>
                            <div className="flex gap-5 text-[#403F3F] text-base mt-4 mb-6">
                                <p className="text-red-600">AUG 5, 2015 <span>|</span></p>
                                <p>Admin</p>
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default BlogDetails;