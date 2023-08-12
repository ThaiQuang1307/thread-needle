import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PositionList.scss";
import { getListPosition } from "../../services/positionServices";
import ButtonAplly from "../Button/ButtonApply";

function PositionList() {
  const [positionData, setPositionData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListPosition();
      setPositionData(response);
    };
    fetchAPI();
  }, []);
  console.log(positionData);

  return (
    <>
      <div className="position">
        <div className="position__header">Available Positions</div>
        {positionData.length > 0 && (
          <div className="position__list">
            {positionData.map((item) => (
              <div key={item.id} className="position__item">
                <Link to={`/careers/${item.id}`}>{`${item.jobName} >`}</Link>
              </div>
            ))}
          </div>
        )}
        <p className="position__note">
          Don't see what you are looking for?
          <br />
          Send us your CV here anyway. If it fits, we'll be in touch.
        </p>
        <div className="page-careers__button">
          <ButtonAplly />
        </div>
      </div>
    </>
  );
}

export default PositionList;
