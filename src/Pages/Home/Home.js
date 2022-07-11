import React,{useEffect} from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigte = useNavigate();

  const auth = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo || userInfo !== null) {
      console.log("so");
      navigte("/chats");
    }
  };
  useEffect(() => {
    auth();
  }, [auth]);

 
  return (
    <Container width="xl" centerContent>
      <Box
        w="100%"
        bg="darkslateblue"
        d="flex"
        justifyContent="center"
        borderRadius="lg"
        m="40px 0 15px 0"
        padding={3}
      >
        <Text color="white" fontSize={"4xl"}>
          Whatsapp Chat
        </Text>
      </Box>

      <Box
        w={"100%"}
        bg={"darkslateblue"}
        p={4}
        borderRadius={"lg"}
        m="10px 0px 0px 0px"
      >
        <Tabs variant="soft-rounded" color={"white"} isLazy>
          <TabList mb={"5"}>
            <Tab w={"50%"} color="white">
              Sign In
            </Tab>
            <Tab w={"50%"} color="white">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
