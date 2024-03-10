import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setConversionClickList,
  setSortValue,
} from "../../store/MaindataSlice/mainDataSlice";
import filter from "../../assets/icons/filter.svg";
import "./conversationComponent.css";
import ConversationListCard from "../Common/ConversationListCard/ConversationListCard";
import input_search from "../../assets/icons/input_search.svg";
import {
  sortByActive,
  sortByDate,
  sortByTimeSpent,
} from "../../helpers/constant";

const ConversionComponent = () => {
  const conversionList = useSelector((state) => state.mainData.mainData);
  const sortValue = useSelector((state) => state.mainData.sort);
  const [conversations, setConversations] = useState(conversionList);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.mainData.converisonClickList
  );
  const handleClick = (list) => {
    dispatch(setConversionClickList(list));
  };

  const sortby = [
    {
      label: "Created Date",
      value: 1,
    },
    {
      label: "Last Activity",
      value: 2,
    },
    {
      label: "Time Spent",
      value: 3,
    },
  ];

  const handleFilter = (event) => {
    let value = event.target.value;

    let conv = [...conversionList];

    setSearchValue(value);

    let filtered = conv.filter((data) =>
      data.name.toLowerCase().includes(value)
    );

    setConversations(filtered);
  };

  useEffect(() => {
    let sortedData = handleSort();
    setConversations(sortedData);
    // eslint-disable-next-line
  }, [sortValue]);

  
  const handleSort = () => {
    switch (sortValue) {
      case 1:
        return sortByDate(conversations);
      case 2:
        return sortByActive(conversations);
      case 3:
        return sortByTimeSpent(conversations);
      default:
        return conversations;
    }
  }
 

  return (
    <div className="section_info">
      {/* section headers */}
      <div className="section_head">
        <div>
          <p className="section_header">conversation</p>
          <p className="sub_text">track user engagement</p>
        </div>
        <div className="icon-border">
          <img src={filter} alt="filter_icon" loading="lazy" />
        </div>
      </div>

      {/* search input */}

      <div className="search_input">
        <input
          type="text"
          value={searchValue}
          className="input_box"
          onChange={handleFilter}
          placeholder="Search by conversations and contacts"
        />
        <img src={input_search} alt="search" width={15} />
      </div>

      {/* sort */}
      <div className="sort_tab">
        <p>Sort by : </p>
        {sortby.map((sort, index) => (
          <p
            className={
              sortValue === sort.value ? "active_sort" : "inactive_sort"
            }
            onClick={() => dispatch(setSortValue(sort.value))}
            key={sort.value}
          >
            {sort.label}
          </p>
        ))}
      </div>

      {/* render list */}
      <div className="conversationLists">
        {conversations?.length > 0 ? (
          conversations.map((list, index) => (
            <Fragment key={index}>
              <ConversationListCard
                list={list}
                isActive={
                  selectedConversation.name === list.name ? true : false
                }
                onClick={() => handleClick(list)}
              />
            </Fragment>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            No Results found
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversionComponent;
