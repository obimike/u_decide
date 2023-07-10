import {
  Box,
  Text,
  Button,
  VStack,
  Center,
  Pressable,
  Image,
  AspectRatio,
  HStack,
} from "native-base";
import React from "react";
import color from "../../../utils/color";
import { Feather } from "@expo/vector-icons";

const CategoryCard = ({ categoryName, categoryRegion }) => {
  return (
    <Box rounded="lg" backgroundColor={color.white} overflow="hidden" p={2}>
      <HStack justifyContent="space-between">
        <Box>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            fontSize={18}
          >
            {categoryName}
          </Text>
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            fontSize={14}
          >
            {categoryRegion}
          </Text>
        </Box>
        <Button variant="outline" borderColor={color.primary}>
          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            fontSize={16}
          >
            Vote
          </Text>
        </Button>
      </HStack>
      <HStack mt={2}>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          fontSize={14}
        >
          <Feather name="clock" size={14} color={color.secondaryTextColor} />{" "}
          voting ends at 11:59pm today
        </Text>
      </HStack>
    </Box>
  );
};

export default CategoryCard;
