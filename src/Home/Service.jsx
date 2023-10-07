import { useEffect, useState } from "react";
import { HiCurrencyDollar } from "react-icons/hi";


const Service = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    return (
    <div className="container mx-auto" >
        <h1 className="text-center font-bold text-4xl mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                services.map(service => <div key={service.id} className="card  bg-base-100 shadow-xl">
                <figure><img src={service.image} alt={service.name} /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                   {service.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{service.description}</p>
                 <div className="flex justify-between items-center">
                    <p className="text-xl font-medium flex items-center  "> <HiCurrencyDollar className="mr-2 text-2xl"></HiCurrencyDollar>Price: {service.price}</p>
                    <button className="btn bg-[#403F3F] text-white">View Details</button>
                 </div>
                </div>
              </div>
              )
            }
        </div>
    </div>
    );
};

export default Service;