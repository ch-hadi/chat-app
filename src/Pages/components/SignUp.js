import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConformPassowrd, setConformPassword] = useState("");
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const submitHandler = async () => {
    setLoading(true);
    if ((!name, !email, !password, !ConformPassowrd, !pic)) {
      toast({
        title: "Please fill all fields",
        duration: 3000,
        isClosable: true,
        status: "warning",
        position: "top-right",
      });
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.post(
        "http://localhost:7000/api/user/signup",
        { name, email, password, pic },
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
      toast({
        title: "Registration is Successfull",
        duration: 3000,
        isClosable: true,
        status: "success",
        position: "top-right",
      });

      localStorage.setItem("userInfo", JSON.stringify(res));

      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured !",
        duration: 3000,
        isClosable: true,
        status: "error",
        position: "top-right",
        description: error.response.data.message,
      });
      setLoading(false);
    }
  };

  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Please your Name.."
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Please your Email.."
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
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
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Please Conform your Password.."
            onChange={(e) => setConformPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} color="black" onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type={"file"}
          p={"1.5"}
          accept="image/*"
          onChange={async (e) => {
            setLoading(true);
            let pic = e.target.files[0];

            if (pic == "undefined") {
              toast({
                title: "Please select the right image",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom",
              });
              return;
            }

            if (pic.type == "image/jpeg" || pic.type === "image/png") {
              try {
                const formData = new FormData();
                formData.append("file", pic);
                formData.append("upload_preset", "chat-app");

                let { data } = await axios.post(
                  "https://api.cloudinary.com/v1_1/snipsync/image/upload",
                  formData
                );

                setPic(data.url);
                setLoading(false);
              } catch (error) {
                console.log("Not uploaded pic error is--->", error);

                return;
              }
            }
          }}
        />
      </FormControl>
      <Button
        onClick={submitHandler}
        w="100%"
        colorScheme={"whiteAlpha"}
        bg="whiteAlpha.900"
        color={"black"}
        style={{ marginTop: 15 }}
        disabled={loading ? true : false}
      >
        {loading ? <Spinner /> : "Sign Up"}
      </Button>
    </VStack>
  );
};

export default SignUp;
