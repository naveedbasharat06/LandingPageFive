import React from "react";
// import newSummarBgCover from "../../images/NewLaunchSammarBrand.png";
import "./NewSummerBrand.css";
function NewSummarBrand() {
  return (
    <div className="NewSummerBrand">
      <div className="newLaunchSummar_text_box">
        <h4>New Launch</h4>
        <h1>SAMMAR</h1>
        <p>
          Samar is not just a fragrance; it is the essence of connection, a
          reminder of the joy found in the simple act of coming together,
          gathering around the fire, and exchanging stories that last a
          lifetime.
        </p>
        <div className="text-center sm:text-left">
          <button className="newLaunch_discover_collection">
            Discover Fragrance
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSummarBrand;
