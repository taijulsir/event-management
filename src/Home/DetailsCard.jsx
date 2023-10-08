/* eslint-disable react/prop-types */

import './Team.css'


const DetailsCard = ({card}) => {
   const {title,image,description} = card
    return (
        <div>
            <div  className="card  bg-base-100 shadow-xl main" >
                <figure><img className='h-[283px] w-[425px]' src={image} alt={title} /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                  {title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p></p>
                 <div className="flex justify-between items-center">
                    <p className="text-lg  text-[#403F3F] flex items-center  ">  {description}</p>
                   
                 </div>
                </div>
              </div>
        </div>
    );
};

export default DetailsCard;