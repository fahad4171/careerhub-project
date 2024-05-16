import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    /* to store data */
    const[jobs, setJobs] = useState([]);

    /* note: we have six data but we want to show only 4, and rest will be shown while clicking on see more button (this is NOT right method, will learn later) */

    const [dataLength, setDataLength] = useState(4);

    /* to load data */
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
            <h2 className="text-6xl text-center">Featured jobs: {jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                 {/* using slice to show only 4 items */}
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {/* if showing all items, the buttons will hide */}
            <div className={dataLength === jobs.length && 'hidden'}>
                {/* while click on button it will show all the 6 items */}
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See more</button>
            </div>
        
        </div>
        
    );
};

export default FeaturedJobs;