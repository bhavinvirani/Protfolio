import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/styleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <>
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            Made with <span><i id="heart" class="blink fas fa-heart"></i> </span> by Bhavin Virani
        </p>
      </div>
    </Fade>
    </>
  );
}
