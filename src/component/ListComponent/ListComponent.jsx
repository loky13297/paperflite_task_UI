import React, { useState } from "react";
import { useSelector } from "react-redux";
import BoxInfo from "../Common/BoxInfo/BoxInfo";
import "./listComponent.css";
import PersonTable from "../Common/PersonTable/PersonTable";
import trash from "../../assets/icons/trash.svg";
import reverse from "../../assets/icons/reverse.svg";
import eye from "../../assets/icons/eye.svg";
import mail from "../../assets/icons/mail.svg";
import person from "../../assets/icons/person.svg";
import clock from "../../assets/icons/clock.svg";
import sack from "../../assets/icons/sack.svg";
import page_bg from "../../assets/icons/bg_img.svg"
import img_fade from "../../assets/icons/image_fade.png"


const ListComponent = () => {
  const collections = useSelector(
    (state) => state.mainData.converisonClickList
  );

  const boxIcon = [mail, person, clock, sack];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="page_bg">
        <img src={page_bg} alt="page_bg" className="img_main"/>
        <img src={img_fade} alt="" className="img_fade"/>
      </div>
    <div className="list_component_bg">
      <div className="header_box">
        <p className="page_header">
          <b>{collections.name}</b>
        </p>
        <div className="d-flex">
          <div className="icon-border">
            <img src={eye} alt="eye" />
          </div>
          <div className="icon-border mx-1">
            <img src={reverse} alt="reverse" />
          </div>
          <div className="icon-border">
            <img src={trash} alt="trash" />
          </div>
        </div>
      </div>
      <div>
        <p className="page_sub_header">
          You shared 2 assets with {collections.shared} recipients
        </p>
        <small className="text-light-gray">
          {collections.shared} month ago via QuickSend
        </small>
      </div>
      <div className="boxDetails_info">
        {collections.boxDetails.map((list, index) => (
          <div className="info_child" key={index}>
            <BoxInfo boxData={list} icon={boxIcon[index]} />
          </div>
        ))}
      </div>

      <div className="custom_tab">
        <p
          className={`text-container ${activeTab === 0 ? "active" : "inactive"}`}
          onClick={() => setActiveTab(0)}
        >
          Recipients - 08
        </p>
        <p
          className={`text-container ${activeTab === 1 ? "active" : "inactive"}`}
          onClick={() => setActiveTab(1)}
        >
          Sections - 05
        </p>
      </div>

      <div>
        {collections.users.map((list,index) => (
          <div key={index}>
            <PersonTable personInfo={list} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ListComponent;
