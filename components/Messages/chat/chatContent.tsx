import React, { useState, useRef, useEffect } from "react";
import "./chatContent.module.css";
// import Avatar from "../chatList/Avatar";
import ChatItem from "./chatItem";

const ChatContent = (): JSX.Element => {
  const messagesEndRef = useRef<React.MutableRefObject<undefined>>();

  const chatItms = [
    {
      key: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e: { keyCode: number; }) => {
      if (e.keyCode === 13 && msg !== "") {
        const newChatItem = {
          key: chat.length + 1,
          type: "",
          msg: msg,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        };
        setChat((prevChat) => [...prevChat, newChatItem]);
        scrollToBottom();
        setMsg("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    scrollToBottom();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [chat, msg]);

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="main__chatcontent">
      {/* Header JSX */}
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : "me"}
              msg={itm.msg}
              image={itm.image}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* Footer JSX */}
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            // value={state.msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
