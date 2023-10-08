/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BlogItem = ({blog}) => {
    const {id,image,title,description,published_date} = blog
    return (
        <div>
            <h1 className="lg:text-4xl  text-xl font-bold my-6">{title}</h1>
            <img className="lg:w-[900px] mb-3" src={image} alt="" />
            <div >
                <div className="flex gap-5 mb-3 text-[#403F3F] text-base">
                <p>{published_date} <span>|</span></p>
                <p>Admin <span>|</span></p>
                <p>Comments</p>
                </div>

                
                {
                        description.length >300 ?
                        <p className="lg:w-4/5 text-xl text-[#403F3F] mb-3"> {description.slice(0,300)}
                        <Link 
                        to={`/blog/${id}`}
                        className=' text-red-700 font-semibold'>
                        Read More ...
                        </Link> </p>
                        
                        : <p> {description} </p>
                    }
            </div>
            <Link to={`/blog/${id}`}><button className="btn btn-error my-3">Read More</button></Link>
        </div>
    );
};

export default BlogItem;