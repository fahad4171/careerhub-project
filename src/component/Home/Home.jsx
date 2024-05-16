/* to show this as website body, we need to call this component as route in nested children route in main.jsx */

import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCatergory from "../JobCategory/JobCatergory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatergory></JobCatergory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;