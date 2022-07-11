import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  useToast,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const submitHandler = async () => {

    setLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:7000/api/user/login",
      { email, password },
      config
    );
    if (res.data.Error) {
      const msg = res.data.Error;
      setLoading(false);
      toast({
        title: "Error Occured !",
        duration: 3000,
        isClosable: true,
        status: "error",
        position: "top-right",
        description: res.data.Error,
      });
      return;
    }
    setLoading(false);
    toast({
      title: "Registration is Successfull",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top-right",
    });

    localStorage.setItem("userInfo", JSON.stringify(res));

    navigate("/chats");
  };
  const submitHandlerGuest = async () => {

    setEmail("g@g.com")
    setPassword("1")
    setLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:7000/api/user/login",
      { email, password },
      config
    );
    if (res.data.Error) {
      const msg = res.data.Error;
      setLoading(false);
      toast({
        title: "Error Occured !",
        duration: 3000,
        isClosable: true,
        status: "error",
        position: "top-right",
        description: res.data.Error,
      });
      return;
    }
    setLoading(false);
    toast({
      title: "Registration is Successfull",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top-right",
    });

    localStorage.setItem("userInfo", JSON.stringify(res));

    navigate("/chats");
  };

  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          defaultValue={email}
          type={"email"}
          placeholder="Please your Email.."
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            defaultValue={password}
            type={show ? "text" : "password"}
            placeholder="Please your Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} color="black" onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        onClick={submitHandler}
        w="100%"
        colorScheme={"whiteAlpha"}
        bg="whiteAlpha.900"
        color={"black"}
        style={{ marginTop: 15 }}
      >
        {loading ? <Spinner /> : "Login"}
      </Button>
      <Button
        onClick={submitHandlerGuest}
        w="100%"
        colorScheme={"whiteAlpha"}
        backgroundColor="red"
        color={"white"}
        style={{ marginTop: 15 }}
      >
        Login as Guest User
      </Button>
    </VStack>
  );
};

export default Login;
