import { useNavigate } from "react-router-dom";
import "./GoBack.scss";

function GoBack(props) {
  const { text } = props;
  const navigate = useNavigate();
  return (
    <>
      <span
        className="go-back"
        onClick={() => navigate(-1)}
      >{`< ${text}`}</span>
    </>
  );
}

export default GoBack;
