import { Main } from "./styles"
import { useLocation } from "react-router-dom";

export default function Result(){
    const location = useLocation()
    const { dataJob, jobsData } = location.state;

    return(
        <Main>
            <h1>{ dataJob.jobname }</h1>

            <h2>Vagas</h2>
            {jobsData.map((job, index) => (
                <article key={index}>
                    <h3>{job.job_name}</h3>
                    <h4>{job.company_name}</h4>
                    <span>{job.company_address}</span>
                </article>
            ))}
        </Main>
    )
}