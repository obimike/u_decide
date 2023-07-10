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
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ChangePassword = () => {
  const [pin, setPin] = useState();
  const [confirmPin, setConfirmPin] = useState();
  const [show, setShow] = useState(false);

  const router = useRouter();
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
      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <VStack space={4}>
              <Box>
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
              </Box>
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
                  width="85%"
                  textAlign="center"
                  _text={{ fontFamily: "Poppins-Regular" }}
                  // onPress={() => router.push("/auth/face_id")}
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
