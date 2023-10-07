import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
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
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;