import { Box, Text, Pressable, Image, AspectRatio } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter } from "expo-router";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push("/tabs/pages/news_details");
      }}
    >
      <Box
        w={285}
        rounded="lg"
        backgroundColor={color.white}
        overflow="hidden"
        borderWidth={1}
        borderColor={color.primary}
        shadow="4"
      >
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: news.imageUrl,
            }}
            alt="image"
          />
        </AspectRatio>
        <Box p={2}>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            fontSize={16}
            noOfLines={2}
          >
            {news.title}
          </Text>
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            fontSize={14}
            mt={2}
          >
            {format(new Date(news.date), "do, MMMM yyyy")}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default NewsCard;
