import "./Banner.scss";

function Banner(props) {
  const { image, text } = props;
  return (
    <>
      <div className="banner">
        <div className="banner__img">
          <img src={image} alt="careers-banner" />
        </div>
        <span className="banner__text">{text}</span>
      </div>
    </>
  );
}

export default Banner;
