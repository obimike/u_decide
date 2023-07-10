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

const CandidateCards = () => {
  return (
    <Pressable
      width="100%"
      rounded="lg"
      backgroundColor={color.white}
      overflow="hidden"
      display="flex"
      flexDir="row"
      p={2}
    >
      <Image
        w={84}
        h={81}
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
          noOfLines={2}
          isTruncated
          w="90%"
        >
          This system being implemented would enable whistleblowers to reports
          of fraudulent We can easily extend the text component theme using
          extendTheme function as described in the documentation
        </Text>
      </VStack>
    </Pressable>
  );
};

export default CandidateCards;
