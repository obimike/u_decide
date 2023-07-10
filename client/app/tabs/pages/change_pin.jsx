import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  VStack,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

const ChangePin = () => {
  const [pin, setPin] = useState();
  const [confirmPin, setConfirmPin] = useState();

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
          Change PIN
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
                  Enter current PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={pin}
                  onTextChange={(password) => setPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Enter New PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={pin}
                  onTextChange={(password) => setPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Confirm New PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={pin}
                  onTextChange={(password) => setPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
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
                    Change PIN
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

export default ChangePin;
