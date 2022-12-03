import JobCard from "../JobCard/JobCard";
import '../JobBoard/jobboard.css'

function JobBoard(){

    return(
        <article id="job-board-container">
            <h1>Available Jobs in Country</h1>

            <JobCard />
            <JobCard />
            <JobCard />

        </article>

    )
}

export default JobBoard;