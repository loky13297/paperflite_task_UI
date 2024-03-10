import React from "react";
import "./conversationListCard.css";
import fishing from "../../../assets/icons/Flisher.jpg";

const ConversationListCard = ({ onClick,list,isActive }) => {

  return (
    <div>
      <div className="section_card" onClick={onClick}>
        <div className="card_img">
          <img src={fishing} alt="img" loading="lazy" />
        </div>
        <div className="card_content">
          <div>
            <h3 className={isActive?"active_title":""}>{list?.name}</h3>
            <p>Shared {list.shared} hours ago</p>
          </div>
          <div>
            <p className="more_text">Kevin +6 more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationListCard;
