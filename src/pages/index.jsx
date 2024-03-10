import React from "react";
import "./layout.css";
import ListComponent from "../component/ListComponent/ListComponent";
import ConversionComponent from "../component/ConversionComponent/ConversationComponent";
import SideBar from "../component/Common/Sidebar/SideBar";
import sb_2 from "../assets/icons/sb_2.svg";
import sb_3 from "../assets/icons/sb_3.svg";
import sb_4 from "../assets/icons/sb_4.svg";

const HomePage = () => {


  return (
    <div>
      <div className="page_layout">
        <section className="side_bar">
          <SideBar />
        </section>

        <section className="content_box">
          <ConversionComponent />
        </section>

        <section className="list_box">
          <ListComponent />
        </section>
      </div>
      <section className="mobile_section_tab">
        <img src={sb_2} alt="" width={30}/>
        <img src={sb_3} alt="" width={30}/>
        <img src={sb_4}  alt="" width={30}/>
      </section>
    </div>
  );
};

export default HomePage;
