import { useState } from "react";
import "./ButtonApply.scss";
// import Apply from "../../Modal/Apply";

function ButtonAplly() {
  const [modal, setModal] = useState(false);

  const handleClickBtnAplly = () => {
    setModal(!modal);
  };

  const handleClose = () => {
    // modal = false;
    setModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.elements);

    const Name = event.target.elements.Name.value;
    const Phone = event.target.elements.Phone.value;
    const Email = event.target.elements.Email.value;
    const Massage = event.target.elements.Message.value;

    let options = {
      Name: Name,
      Phone: Phone,
      Email: Email,
      Massage: Massage,
    };

    console.log(options); // gửi lên backend
  };

  return (
    <>
      <button
        onClick={handleClickBtnAplly}
        className="btn-default btn-black"
        style={{ marginTop: "2rem" }}
      >
        Apply
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <button onClick={handleClose} className="close-modal">
                X
              </button>
              <div className="modal-form">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form__content">
                    <div className="form__item">
                      <label>Your name</label>
                      <input type="text" name="Name" required />
                    </div>
                    <div className="form__item">
                      <label>Your phone</label>
                      <input type="text" name="Phone" required />
                    </div>
                    <div className="form__item">
                      <label>Your email</label>
                      <input type="email" name="Email" required />
                    </div>
                    <div className="form__item form__item--CV">
                      <div className="input__CV">
                        <input type="file" name="file" required />
                        <span> Your CV</span>
                      </div>
                    </div>
                    <div className="form__item form__item--message">
                      <label>Your message</label>
                      <textarea type="text" name="Message" rows={6} required />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-default btn-black btn-submit"
                    style={{ margin: "1.5rem 0" }}
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <Apply modal={modal} /> */}
    </>
  );
}

export default ButtonAplly;
