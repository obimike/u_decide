import {
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
  KeyboardAvoidingView,
  Input,
  ScrollView,
  VStack,
  Image,
  Button,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import VoteCard from "../components/voteCard";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

const ConfirmVote = () => {
  const [pin, setPin] = useState();
  const router = useRouter();
  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs/vote")}>
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
          Vote
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={16}
          fontFamily="Poppins-Regular"
          mt={2}
        >
          Confirm your vote
        </Text>
      </Box>
      <Box p={4}>
        <Center my={8}>
          <Image
            w="184px"
            h="184px"
            rounded="full"
            mr={4}
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
          <Text
            color={color.textColor}
            fontSize={20}
            fontFamily="Poppins-Regular"
          >
            Peter Obi
          </Text>
          <Text
            color={color.textColor}
            fontSize={16}
            fontFamily="Poppins-Regular"
          >
            Running mate: Datti Ahmed
          </Text>
          <Text
            color={color.textColor}
            fontSize={16}
            fontFamily="Poppins-Regular"
            mb={8}
          >
            Party: Labour Party
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
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            textAlign="left"
            fontSize="lg"
            mt={2}
          >
            Enter your voting PIN
          </Text>

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
              Confirm Vote
            </Text>
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default ConfirmVote;
