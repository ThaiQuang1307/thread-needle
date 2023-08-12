/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import careers from "../../images/careers.jpg.webp";
import { getPosition } from "../../services/positionServices";
import "./JobDetail.scss";
import GoBack from "../../components/GoBack";
import ButtonAplly from "../../components/Button/ButtonApply";

function JobDetail() {
  const params = useParams();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getPosition(params.id);
      setJob(response);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="job-detail">
        <div className="job-detail__banner">
          <Banner image={careers} text={job.jobName} />
          <span className="back">
            <GoBack text="Careers" />
          </span>
        </div>
        <div className="job-detail__content">
          <div className="job-detail__des">{job.description}</div>
          <div className="job-detail__main">
            <strong>Key Responsibilities</strong>
            {(job.keyResponsibilities || []).length > 0 &&
              job.keyResponsibilities.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            <strong>Requirements</strong>
            {(job.requirements || []).length > 0 &&
              job.requirements.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
          </div>
          <div className="job-detail__button">
            <ButtonAplly />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetail;
