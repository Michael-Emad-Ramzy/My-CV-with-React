import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faFacebook,
  faGithub,
  faWhatsapp,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {
  return (
    <div className="social-icon d-flex flex-col singleCol justify-content-evenly ">
      <a href="https://github.com/Michael-Emad-Ramzy" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/michael-ebeid-7a9a25277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9T892bYHRii7VHZ1JIPUAQ%3D%3D"
        target="_blank"
      >
        {" "}
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://wa.me/201286346987" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.facebook.com/popmikeal.emad/" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="mailto:michaelebeid9@gmail.com" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
  );
}
