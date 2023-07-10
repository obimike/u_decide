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
import ResultCard from "../components/resultCard";

const LiveResults = () => {
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
          Live Election Results
        </Text>
      </Box>
      <Box p={4}>
        <HStack my={4} justifyContent="space-around">
          <VStack alignItems="center">
            <Text
              color={color.secondaryTextColor}
              fontSize={14}
              fontFamily="Poppins-Regular"
            >
              Total Voters
            </Text>
            <Text
              color={color.textColor}
              fontSize={16}
              fontFamily="Poppins-Regular"
            >
              6,230,980
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Text
              color={color.secondaryTextColor}
              fontSize={14}
              fontFamily="Poppins-Regular"
            >
              {" "}
              <Feather
                name="clock"
                size={14}
                color={color.secondaryTextColor}
              />{" "}
              voting ends
            </Text>
            <Text
              color={color.textColor}
              fontSize={16}
              fontFamily="Poppins-Regular"
            >
              In 8 hrs
            </Text>
          </VStack>
        </HStack>

        <ResultCard />
      </Box>
    </Box>
  );
};

export default LiveResults;
