import React from "react";
import sb_1 from "../../../assets/icons/sb_1.svg";
import sb_2 from "../../../assets/icons/sb_2.svg";
import sb_3 from "../../../assets/icons/sb_3.svg";
import sb_4 from "../../../assets/icons/sb_4.svg";
import sb_5 from "../../../assets/icons/sb_5.svg";
import sb_6 from "../../../assets/icons/sb_6.svg";
import sb_7 from "../../../assets/icons/sb_7.svg";
import profile_pic from "../../../assets/icons/profile_pic.jpg";
import "./sidebar.css";

const SideBar = () => {
  const sideBarIcons = [sb_1, sb_2, sb_3, sb_4, sb_5, sb_6];

  return (
    <div>
      <div className="sidebar">
        <div className="sidebox">
          {sideBarIcons?.map((icon,index) => (
            <div className="side_icons" key={index}>
              <img src={icon} alt={"sidebar_icon"} height={25} width={25} />
            </div>
          ))}
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <img src={sb_7} alt={"sidebar_icon"} height={25} width={25} />
          </div>
          <img src={profile_pic} alt={"profile_img"} className="profile_img" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
