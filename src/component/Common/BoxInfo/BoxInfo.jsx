import React from "react";
import "./boxInfo.css";

const BoxInfo = ({boxData,icon}) => {
  return (
    <div>
      <div className="detail_box">
        <div className="box_header">
          <div>{boxData.value}</div>
          <div><img src={icon} alt="box_img" height={20} width={20}/></div>
        </div>
        <div>{boxData.text}</div>
      </div>
    </div>
  );
};

export default BoxInfo;
