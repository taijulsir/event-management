import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {
    const blogs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const blog = blogs.find(blogDetails => blogDetails.id === idInt)
    const { image, description, published_date, tags } = blog
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4">
            <div className=" col-span-3 mt-10">
                <img className="lg:w-[900px]" src={image} alt="" />
                <div className="flex gap-5 mb-3 text-[#403F3F] text-base">
                    <p>{published_date} <span>|</span></p>
                    <p>Admin <span>|</span></p>
                </div>
                <p className="lg:w-4/5 text-lg text-[#403F3F] mb-2">{description}</p>
                <p>Tags: {tags[0]}</p>

                <h1 className="mt-10 text-3xl font-semibold">Related Post</h1>
                <div className="grid  grid-cols-1 md:grid-cols-2 mb-5 gap-2 ">
                    <div className=" rounded-lg">
                        <img className="h-[400px] w-[450px]" src="https://i.ibb.co/1rkDvry/blog3.jpg" alt="" />
                        <p>Turning a Profit in the Event Planning Business</p>

                    </div>
                    <div className=" rounded-lg">
                        <img  className="h-[400px] w-[450px]" src="https://i.ibb.co/zhB9Ww2/blog2.jpg" alt="" />
                        <p>Hiring an Events Planner</p>
                    </div>
                </div>

                <h1 className="mt-10 text-3xl font-semibold">Add Comment </h1>
                <p>Your email address will not be published. Required fields are marked *</p>
               <div>
                <input type="text" placeholder="comment" className="lg:w-4/5 h-20 px-4 text-xl bg-[#403F3F] outline-none" />
                <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <input type="text" placeholder="Name*" className="h-10 px-4 text-xl bg-[#403F3F] outline-none " />
                    <input type="text" placeholder="Email*" className="h-10 px-4 text-xl bg-[#403F3F] outline-none " />
                </div>
                <label>
                    <input type="checkbox" name="" id="" /> By using this form you agree with the storage and handling of your data by this website Privacy Policy. *
                </label>
                <button>Post Comment</button>
               </div>
               
            </div>
            <div >
                    
            </div>
        </div>
    );
};

export default BlogDetails;