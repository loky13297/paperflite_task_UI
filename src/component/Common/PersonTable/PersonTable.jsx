import React from "react";
import "./personTable.css";
import mail_2 from "../../../assets/icons/mail_2.svg";
import avatar from "../../../assets/icons/person.svg";
import share from "../../../assets/icons/share.svg";
import location from "../../../assets/icons/location.svg";
import profile_pic from "../../../assets/icons/profile_pic.jpg";

const PersonTable = ({ personInfo }) => {

  return (
    <div>
      <div className="display_people_card">
        <div className="person_details">
          <div>
            <img src={profile_pic} alt={"profile_img"} className="people_img" />
          </div>
          <div className="display_name">{personInfo.name}</div>
          <div className="border-vr mx-1"></div>
          <div className="display_visit">
            last viewed {personInfo.lastViewed}
          </div>
        </div>
        <div className="icons_box">
          <div className="text-light-gray fs-12">{personInfo.min}</div>
          <div>
            <img src={mail_2} alt="open_mail" />
          </div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <img src={share} alt="share" />
          </div>
          <div className="border-vr"></div>
          <div className="icon-border">
            <img src={location} alt="location" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonTable;
