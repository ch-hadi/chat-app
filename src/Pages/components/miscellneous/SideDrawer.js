import React, { useState } from "react";
import { Box, Button, Text, Tooltip, Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider, } from "@chakra-ui/react";
  import { BellIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { ChatState } from "../../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";

const SideDrawer = () => {
  const navigat = useNavigate()
  const {user} =ChatState()
  const [search, setDearch] = useState("");
  const [searchResult, setSeachResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLodingChat] = useState("");

  const logout=()=>{
    localStorage.removeItem('userInfo')
    localStorage.clear()
    navigat("/")
  }
  // useEffect(()=>{},[])
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Serch Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text px={4} dispaly={{ base: "none", md: "flex" }}>
              Seach User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize='2xl' fontFamily='cursive'>Whatsapp Chat</Text>
        <div>
          <Menu>
            <MenuButton p={1}>
            <BellIcon fontSize='2xl' m={1}/>  
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              <Avatar size="sm" cursor="pointer" src={user.data.pic} name={user.data.name} />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}><MenuItem>My Profile</MenuItem></ProfileModal>
              <MenuDivider/>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
