import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]); //chats to show data , setChats to update value of chats variable
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  // return <div>{chats.map()}</div>;
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}> {chat.chatName} </div> //in rjs when using map you are supposed to give key to every child element (wihtin div)
      ))}
    </div>
  );
};

export default Chatpage;
