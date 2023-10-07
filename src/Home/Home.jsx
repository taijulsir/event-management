import Banner from "./Banner";
import Service from "./Service";
import TeamMeet from "./TeamMeet";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <Service></Service>
            <TeamMeet></TeamMeet>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;