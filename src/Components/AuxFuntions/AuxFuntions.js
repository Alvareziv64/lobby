import React from "react";
import "./AuxFuntions.css";
import search from "../../img/search.png";
import messages from "../../img/messages.png";
import settings from "../../img/settings.png";

const AuxFuntions = () => {
  return (
    <div className="aux-icons">
      <div className="aux-icon">
        <img src={search} alt="logo" width="25px" />
      </div>
      <div className="aux-icon">
        <img src={messages} alt="logo" width="25px" />
      </div>
      <div className="aux-icon">
        <img src={settings} alt="logo" width="25px" />
      </div>
    </div>
  );
};

export default AuxFuntions;
