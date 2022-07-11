import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import SideDrawer from "../components/miscellneous/SideDrawer";
import MyChats from "../components/miscellneous/MyChats";
import ChatBox from "../components/miscellneous/ChatBox";

const ChatPage = () => {
  const navigte = useNavigate();
  const { user } = ChatState();

  const auth = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo || userInfo == null) {
      console.log("o");
      navigte("/");
    }
  };
  useEffect(() => {
    auth();
  }, [auth]);
  console.log("user-?", user);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        w="100%"
        justifyContent="space-between"
        height="91.5vh"
        p='10px'
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
