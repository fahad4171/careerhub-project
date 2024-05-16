/* 1.Getting already saved job application */
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    /* if it get anything with 'job-application'key name, it will show or else it will return empty array */
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

/* 2. saving the applied job application with id*/
const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();

    /* we will loop through job id whether it already exists, if does not, we will push it  to local storage in (job-application)*/
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }
    
}

export { getStoredJobApplication, saveJobApplication }