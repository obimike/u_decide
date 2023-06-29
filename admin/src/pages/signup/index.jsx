import { useState } from "react";
import {
  Text,
  Box,
  Button,
  Input,
  Image,
  Flex,
  Checkbox,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SiteBodyMaxWidth } from "../../components/containers";
import { colors } from "../../utils/colors";
import Ballot from "../../images/ballot.png";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [terms, setTerms] = useState(null);

  let navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    // clear message state
    setErrorMsg(null);

    const isFieldsEmpty =
      fullName !== "" &&
      password !== "" &&
      email !== "" &&
      authCode !== "" &&
      confirmPassword !== "";

    const isPasswordMatch = password === confirmPassword;

    if (!isFieldsEmpty) {
      setErrorMsg("All fields are required!");
    } else {
      if (isPasswordMatch) {
        //  registerUser();
      } else {
        setErrorMsg("Password donot match!");
      }
    }
  };

  return (
    <SiteBodyMaxWidth>
      <Box
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        margin="auto 0"
        height="100vh"
      >
        <Flex w="50%" direction="column" px="10">
          <Text fontSize="4xl" color={colors.primary} marginBottom="24px">
            U-Decide
          </Text>

          <Text fontSize="24px">Create your account</Text>
          <Flex>
            <Text fontSize="16px">Already have account?</Text>
            <Button
              color={colors.primary}
              fontWeight="normal"
              variant="link"
              ml={2}
              onClick={() => {
                navigate("/");
              }}
            >
              Log In.
            </Button>
          </Flex>

          {/* Setting feedback messages */}
          {errorMsg && (
            <Text
              my={2}
              color="red"
              fontSize="16px"
              sx={{
                textAlign: "center",
              }}
            >
              {errorMsg}
            </Text>
          )}

          <Box mt={12}>
            <Text fontSize="16px">Full Name</Text>
            <Input
              placeholder="Enter your Full Name"
              value={fullName}
              borderColor={colors.primary}
              onChange={(event) => setFullName(event.target.value)}
            />
            <Text fontSize="16px" mt={4}>
              Email
            </Text>
            <Input
              placeholder="Enter your Email"
              value={email}
              borderColor={colors.primary}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Text fontSize="16px" mt={4}>
              Password
            </Text>
            <Input
              placeholder="Enter password"
              borderColor={colors.primary}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Text fontSize="16px" mt={4}>
              Confirm Password
            </Text>
            <Input
              placeholder="Confirm password"
              borderColor={colors.primary}
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <Text fontSize="16px" mt={4}>
              Authorizing code
            </Text>
            <Input
              placeholder="Enter Authorizing code"
              borderColor={colors.primary}
              value={authCode}
              onChange={(event) => setAuthCode(event.target.value)}
            />

            <Flex mt={4} align="center">
              <Checkbox
                colorScheme="green"
                value={terms}
                onChange={(event) => setTerms(event.target.value)}
              />
              <Text fontSize="16px" ml={4}>
                Agree to terms and conditions
              </Text>
            </Flex>

            <Button
              bgColor={colors.primary}
              color="white"
              variant="solid"
              fontWeight="normal"
              mt={4}
              w="100%"
              onClick={signIn}
            >
              Log In
            </Button>
          </Box>
        </Flex>
        <Flex direction="column" px="10" alignItems="center">
          <Text fontSize="24px" textAlign="center">
            Ensuring the a free and fair election for all!{" "}
          </Text>

          <Image src={Ballot} w={400} h={400} alt="image" />
        </Flex>
      </Box>
    </SiteBodyMaxWidth>
  );
}

export default SignUp;
