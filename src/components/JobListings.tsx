import jobs from "../jobs.json";
import JobListing from "./JobListing.tsx";

function JobListings() {
  const RecentJobs = jobs.jobs.slice(0, 3);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        { RecentJobs.map((job) => {
          return (
            <JobListing key={job.id} job={ job } />
          )
      })}
      </div>
    </section>
  )
}

export default JobListings;
