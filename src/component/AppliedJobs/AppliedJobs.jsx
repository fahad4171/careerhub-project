/* to show this as website body, we need to call this component as route in nested children route in main.jsx */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    /* we need store the jobs using useState */
    const [applyJobs, setApplyJobs] = useState([]);
    /* for filter-1 */
    const [displayJobs, setDisplayJobs] = useState([]);

    /* for filter-3: event handler*/
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(applyJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = applyJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const onSiteJobs = applyJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs)
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            //method 1: const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setApplyJobs(jobsApplied);
            setDisplayJobs(jobsApplied); /* for filter-2 */
            //console.log(jobs, storedJobIds, jobsApplied);

            

        }
    }, []);

    return (
        <div>
            <h2 className="text-3xl text-center">Applied jobs: {applyJobs.length}</h2>
            <div className="text-right">
            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="font-semibold  p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            </div>
            <div>
                <ul>
                    {
                        displayJobs.map(job => <li className="mt-10" key={job.id}>
                            <div className="card card-side bg-base-100 shadow-xl px-4 items-center">
                                <figure>
                                    <img src={job.logo} alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p className="font-semibold">{job.company_name}</p>
                                    <div className="flex gap-3">
                                        <button className="btn border-slate-600">{job.remote_or_onsite}</button>
                                        <button className="btn border-slate-600">{job.job_type}</button>
                                    </div>
                                    <div className="flex">
                                        <p>{job.location}</p>
                                        <p>${job.salary}</p>
                                    </div>

                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;