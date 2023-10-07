import Banner from "./Banner";
import Service from "./Service";
import TeamMeet from "./TeamMeet";


const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <Service></Service>
            <TeamMeet></TeamMeet>
        </div>
    );
};

export default Home;