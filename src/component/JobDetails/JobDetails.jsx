import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    /* The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes. */
    /* here, using useParams, we dynamically returning id from the data given in json file */
    const { id } = useParams();/* this id is string and id in json file is number, so need to convert */
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () => {
        /* importing (saveJobApplication) function and providing id to it */
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2 className="text-5xl text-center">Job details: {job.job_title}</h2>
            <div className="grid gap-6 md:grid-cols-4 mt-20">
                <div className="md:col-span-3 space-y-4">
                    <p><span className="font-semibold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-semibold">Job Responsibility:</span>{job.job_responsibility}</p>
                    <p><span className="font-semibold">Educational Requirement:</span>{job.educational_requirements}</p>
                    <p><span className="font-semibold">Experiences:</span>{job.experiences}</p>
                </div>
                <div>
                    <div className="border bg-slate-400 rounded-xl">
                        <div className="px-3">
                            <h4 className="font-bold mt-6">Job Details</h4>
                            <hr />
                            <p><span className="font-semibold">Salary: </span>{job.salary} (per month)</p>
                            <p><span className="font-semibold">Job Title: </span>{job.job_title}</p>

                            <h4 className="font-bold mt-10">Contact Information</h4>
                            <hr />
                            <p><span className="font-semibold">Phone: </span>{job.contact_information.phone}</p>
                            <p><span className="font-semibold">Email: </span>{job.contact_information.email}</p>
                            <p><span className="font-semibold">Address: </span>{job.contact_information.address}</p>

                        </div>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full mt-6">Apply</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;