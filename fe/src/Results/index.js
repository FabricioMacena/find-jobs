import { useState } from "react";
import { Main, Article, Pagination } from "./styles"
import { useLocation } from "react-router-dom";

export default function Result(){
    const location = useLocation()
    const { dataJob, jobsData } = location.state;

    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 5;

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = jobsData.slice(indexOfFirstArticle, indexOfLastArticle);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return(
        <Main>
            <p id="introJobs">Vagas de <strong>{dataJob.jobname}</strong> em <strong>{dataJob.jobcity}</strong></p>

            {currentArticles.map((job, index) => (
                <a href={job.job_href} key={index} target="blank" className="linkArticle">
                    <Article>
                        <div className="dataJob">
                            <h3 className="jobTitle">{job.job_name}</h3>
                            <h4 className="companyName">{job.company_name}</h4>
                            <span className="jobPlace">{job.company_address}</span>
                        </div>
                        <div className="dataLink">
                            <span>{job.day_posted}</span>
                            <a href={job.job_href} target="blank" className="linkJob">Ir para a vaga</a>
                        </div>
                    </Article>
                </a>
            ))}

            <Pagination>
                {currentPage > 1 && <button onClick={prevPage}>Anterior</button>}
                {indexOfLastArticle < jobsData.length && <button onClick={nextPage}>Próximo</button>}
            </Pagination>
            
        </Main>
    )
}