import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  KeyboardAvoidingView,
  Input,
  ScrollView,
  VStack,
  Icon,
} from "native-base";
import { useState } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { updatePassword } from "../../../firebase";
import { useAuth } from "../../../utils/authProvider";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  const router = useRouter();

  const hansleChange = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    const isFieldsEmpty = confirmPassword !== "" && password !== "";

    console.log(password);
    if (!isFieldsEmpty) {
      setErrorMsg("All fields are required!");
    } else if (confirmPassword === password) {
      setLoading(true);
      try {
        updatePassword(currentUser, password)
          .then(() => {
            setSuccessMsg(
              "Password change was successful,\n Please remember to use it in your next login"
            );
            setConfirmPassword("");
            setPassword("");
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            errorCode(error.code);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMsg("Passwords do not match");
      setLoading(false);
    }
  };
  const errorCode = (code) => {
    switch (code) {
      case "auth/weak-password":
        setErrorMsg("Password should be at least 6 characters.");
        break;
      default:
        setErrorMsg("An unknown error has occured.");
        break;
    }
  };

  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs/settings")}>
          <HStack>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={color.textColor}
            />
            <Text
              color={color.textColor}
              fontSize={18}
              fontFamily="Poppins-Regular"
              alignSelf="center"
            >
              Back
            </Text>
          </HStack>
        </Pressable>
        <Text
          color={color.textColor}
          fontSize={20}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          Change Password
        </Text>
      </Box>
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
      {successMsg && (
        <Text
          fontFamily="Poppins-Regular"
          my={4}
          color={color.primary}
          fontSize="lg"
          textAlign="center"
        >
          {successMsg}
        </Text>
      )}

      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <VStack space={4}>
              {/* <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Enter current Password
                </Text>
                <Input
                  size="xl"
                  borderColor={color.primary}
                  type={show ? "text" : "password"}
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
                  placeholder="Enter current password"
                />
              </Box> */}
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Enter New Password
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
                  placeholder="Enter new password"
                />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Confirm New Password
                </Text>
                <Input
                  size="xl"
                  borderColor={color.primary}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
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
                  placeholder="Confirm new password"
                />
              </Box>
              <Center>
                <Button
                  marginTop={6}
                  backgroundColor={color.primary}
                  size="lg"
                  width="100%"
                  textAlign="center"
                  _text={{ fontFamily: "Poppins-Regular" }}
                  isLoadingText="Applying changes..."
                  isLoading={loading}
                  onPress={hansleChange}
                >
                  <Text
                    fontFamily="Poppins-Regular"
                    color={color.white}
                    textAlign="left"
                    fontSize="md"
                  >
                    Change Password
                  </Text>
                </Button>
              </Center>
            </VStack>
          </KeyboardAvoidingView>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ChangePassword;
