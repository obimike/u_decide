import { Box, Text, Button, HStack } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CategoryCard = ({ categoryName, categoryRegion, voted }) => {
  const router = useRouter();
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
        <Button
          variant="outline"
          borderColor={color.primary}
          isDisabled={voted}
          onPress={() =>
            router.push({
              pathname: "/tabs/pages/vote_category",
              params: {
                category: categoryName,
              },
            })
          }
        >
          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            fontSize={16}
          >
            {voted ? "Voted" : "Vote"}
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
