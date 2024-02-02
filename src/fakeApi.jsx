import data from './data.json'

const jobs = data;

export const getJobs = () => {
    return jobs;
  };
  
  export const getJobById = (jobsId) => {
    return jobs.find((job) => job.id === parseInt(jobsId));
  };
  