import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
  Image,
  AspectRatio,
} from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter } from "expo-router";

const NewsCard = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push("/tabs/pages/news_details");
      }}
    >
      <Box
        w={285}
        borderRadius={8}
        rounded="lg"
        backgroundColor={color.white}
        overflow="hidden"
        borderWidth={1}
        borderColor={color.primary}
      >
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        <Box p={2}>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            fontSize={16}
          >
            The office of the presidency has charged INEC to ensure free...
          </Text>
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            fontSize={14}
            mt={2}
          >
            2nd, February 2023
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default NewsCard;
