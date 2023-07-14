import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Stack,
  Pressable,
  Icon,
} from "native-base";
import color from "../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

import { signInWithEmailAndPassword, auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signIn = () => {
    setErrorMsg(null);
    const isFieldsEmpty = email !== "" && password !== "";

    console.log(email);
    console.log(password);

    if (!isFieldsEmpty) {
      setErrorMsg("All fields are required!");
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // // Signed in
          // const user = userCredential.user;
          router.replace("/tabs");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          console.log(error.code);
          errorCode(error.code);
          setLoading(false);
        });
    }
  };

  const errorCode = (code) => {
    switch (code) {
      case "auth/user-not-found":
        setErrorMsg("User does not exist!");
        break;
      case "auth/missing-email":
        setErrorMsg("Missing Email Address");
        break;
      case "auth/wrong-password":
        setErrorMsg("Wrong Email or password");
        break;
      case "auth/invalid-email":
        setErrorMsg("Email Address is invalid");
        break;

      default:
        setErrorMsg("An unknown error has occured.");
        break;
    }
  };

  return (
    <Box padding={4}>
      <Text
        fontFamily="Poppins-Regular"
        color={color.primary}
        textAlign="center"
        fontSize="3xl"
      >
        U-Decide
      </Text>

      <Text
        fontFamily="Poppins-Regular"
        color={color.textColor}
        textAlign="left"
        fontSize="2xl"
        mt={12}
      >
        Login
      </Text>

      {/* Setting feedback messages */}
      {errorMsg && (
        <Text
          fontFamily="Poppins-Regular"
          my={4}
          color={color.error}
          fontSize="lg"
          textAlign="center"
        >
          {errorMsg}
        </Text>
      )}
      <Stack mt={6} space={4}>
        <Box>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            textAlign="left"
            fontSize="lg"
          >
            Email
          </Text>
          <Input
            size="xl"
            placeholder="Enter email address"
            borderColor={color.primary}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </Box>
        <Box>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            textAlign="left"
            fontSize="lg"
          >
            Password
          </Text>
          <Input
            size="xl"
            borderColor={color.primary}
            type={show ? "text" : "password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Enter Password"
          />
        </Box>
      </Stack>
      <Button
        marginTop={12}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        isLoadingText="Authenticating..."
        isLoading={loading}
        onPress={signIn}
      >
        Log In
      </Button>

      <Flex mt={24} flexDir="row" justifyContent="center">
        <Text
          fontFamily="Poppins-Regular"
          color={color.textColor}
          textAlign="left"
          fontSize="lg"
        >
          Don’t have an account?
        </Text>

        {/* <Link href="/auth/verify_nin"> */}
        <Link href="/auth/face_id">
          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            textAlign="left"
            fontSize="lg"
          >
            {" "}
            Register
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
