import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render = () => {
    return (
      <footer className="bg center">
        <div className=" row app-py-3">
          <div className="container" style={{ fontSize: "16px" }}>
            <div className="col l6 s12 offset-l3 center">
              <p>
                <span className="material-icons notranslate">photo_camera</span>
                <a
                  href="https://www.instagram.com/moraclthng/"
                  target="__blank"
                >
                  Instagram
                </a>
              </p>

              <p>
                <span className="material-icons notranslate">phone</span> +234
                701 241 3480
              </p>

              <p>
                <span className="material-icons notranslate">mail</span>{" "}
                {MAIL_NAME}
              </p>

              <span className="material-icons notranslate">location_on</span>
              <span>98 Green Road, Farmgate, Bitcoin Estate</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
}

export default Footer;
