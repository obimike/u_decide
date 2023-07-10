import {
  Box,
  Text,
  Button,
  VStack,
  Center,
  Pressable,
  Image,
  AspectRatio,
} from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter } from "expo-router";

const VoteCard = () => {
  const router = useRouter();
  return (
    <Pressable
      width="100%"
      rounded="lg"
      backgroundColor={color.white}
      overflow="hidden"
      display="flex"
      flexDir="row"
      p={2}
      borderWidth={1}
      borderColor={color.primary}
      onPress={() => {
        router.push("/tabs/pages/confirm_vote");
      }}
    >
      <Image
        w="64px"
        h="68px"
        rounded="lg"
        mr={4}
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        }}
        alt="image"
      />
      <VStack width="80%" justifyContent="space-between">
        <Text
          fontFamily="Poppins-Regular"
          color={color.textColor}
          fontSize={18}
        >
          Peter Obi
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          fontSize={16}
          noOfLines={1}
          isTruncated
          w="90%"
        >
          Running mate: Datti Ahmed
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          fontSize={14}
          noOfLines={1}
          isTruncated
          w="90%"
        >
          Party: Labour Party
        </Text>
      </VStack>
    </Pressable>
  );
};

export default VoteCard;