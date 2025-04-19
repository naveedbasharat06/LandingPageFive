import React, { useState } from "react";
import "./PerfumeVideo.css";
import playIcon from "../../../images/playVideoIcons.png";
import pauseIcon from "../../../images/pauseTikTok (1).png";

function PerfumeVideo() {
  const [playVideoIcon, SetPlayVideoIcon] = useState(playIcon);

  const handleChangeIcon = (e: any) => {
    e.preventDefault();
    SetPlayVideoIcon((prevIcon: any) =>
      prevIcon === playIcon ? pauseIcon : playIcon
    );
  };

  return (
    <div className="Perfume_backgroundVideo">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="playPauseIcon w-20 md:w-24 lg:w-32 cursor-pointer transition-all duration-300 hover:scale-110"
          src={playVideoIcon}
          onClick={handleChangeIcon}
          alt="playIcon"
        />
      </div>
    </div>
  );
}

export default PerfumeVideo;
