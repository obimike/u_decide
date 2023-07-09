import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

import IMAGE from "../../assets/images/pin.png";

const TouchID = () => {
  const [pin, setPin] = useState();
  const [confirmPin, setConfirmPin] = useState();

  const router = useRouter();
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <Box padding={4}>
          <HStack mb={8} alignItems="center">
            <Pressable onPress={() => router.back()}>
              <Icon
                as={<MaterialIcons name="chevron-left" />}
                size={10}
                color={color.textColor}
              />
            </Pressable>
            <Text
              fontFamily="Poppins-Regular"
              pl={2}
              fontSize="xl"
              color={color.textColor}
            >
              Back
            </Text>
          </HStack>

          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            textAlign="left"
            fontSize="3xl"
          >
            Voting PIN
          </Text>
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            textAlign="left"
            fontSize="md"
          >
            Choose a four(4) digit number which will be used to authenticate
            your vote.
          </Text>

          <Center mt={8}>
            <Image width="5/6" height={240} source={IMAGE} alt="Pin Image" />
            <Box mt={8}>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Add backup PIN
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
            <Box mt={4}>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Confirm backup PIN
              </Text>
              <SmoothPinCodeInput
                password
                mask="﹡"
                //   cellSize={42}
                codeLength={4}
                cellSpacing={16}
                value={confirmPin}
                onTextChange={(password) => setConfirmPin(password)}
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

            <Button
              marginTop={6}
              backgroundColor={color.primary}
              size="lg"
              width="85%"
              textAlign="center"
              _text={{ fontFamily: "Poppins-Regular" }}
              onPress={() => router.push("/auth/face_id")}
            >
              Continue
            </Button>
          </Center>
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default TouchID;
