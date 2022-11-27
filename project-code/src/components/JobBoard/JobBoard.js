import JobCard from "../JobCard/JobCard";
import '../JobBoard/jobboard.css'

function JobBoard(){

    return(
        <article id="job-board-container">
            <h1>Available Jobs in Country</h1>

            <JobCard job_num="1"/>
            {/* <JobCard job_num="2"/> */}
            {/* <JobCard job_num="3"/> */}

        </article>

    )
}

export default JobBoard;