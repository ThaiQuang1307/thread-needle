import Logo from "../../../Logo";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrap">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="address-infor">
            <p className="address-infor__text">
              2nd floor, The Terra 83 Hao Nam,
            </p>
            <p className="address-infor__text">Dong Da District, Hanoi,</p>
            <p className="address-infor__text">Vietnam</p>
            <p className="address-infor__phone">(84) 98 598 93 39</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
