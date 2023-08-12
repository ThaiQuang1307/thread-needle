import Banner from "../../components/Banner";

import PositionList from "../../components/PositionList";
import careers from "../../images/careers.jpg.webp";
import "./Career.scss";

function Careers() {
  return (
    <>
      <div className="page-careers">
        <div className="page-careers__banner">
          <Banner image={careers} text="Career" />
        </div>
        <PositionList />
      </div>
    </>
  );
}

export default Careers;
