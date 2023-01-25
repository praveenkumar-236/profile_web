import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <h5>
            {" "}
            © 2022 All Rights Reserved. <span>
              Developed By PraveenKumar
            </span>{" "}
          </h5>
        </p>
      </Fade>
    </div>
  );
}
