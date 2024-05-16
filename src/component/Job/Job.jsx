import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
      
      const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <button className="px-5 py-2 font-extrabold border rounded border-indigo-400 text-indigo-400">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-indigo-400 text-indigo-400">{job_type}</button>
                </div>
                <div className="flex items-center">
                    <p className="flex gap-2 items-center text-lg text-slate-600 font-semibold"><MdLocationOn></MdLocationOn>{location}</p>
                    <p className="flex gap-2 items-center text-lg text-slate-600 font-semibold"><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</p>
                </div>
                <div className="card-actions">
                    {/* clicking on button will get the id of clicked items, and will take to <jobDetails> page */}
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;