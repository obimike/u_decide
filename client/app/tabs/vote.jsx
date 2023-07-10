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
  VStack,
} from "native-base";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import color from "../../utils/color";
import { useRouter, Tabs } from "expo-router";
import CategoryCard from "./components/categoryCard";

const Vote = () => {
  const router = useRouter();
  return (
    <Box h="100%">
      <HStack
        backgroundColor={color.white}
        padding={4}
        justifyContent="space-between"
      >
        <Text
          color={color.textColor}
          fontSize={24}
          fontFamily="Poppins-Regular"
          alignSelf="center"
        >
          Elections
        </Text>
        <Button
          backgroundColor={color.primary}
          onPress={() => {
            router.push("/tabs/pages/live_results");
          }}
        >
          <Text fontFamily="Poppins-Regular" color={color.white} fontSize={14}>
            Live Results
          </Text>
        </Button>
      </HStack>
      <Box padding={4}>
        <VStack space={2}>
          <CategoryCard
            categoryName="Presidential Election"
            categoryRegion="Nationwide"
          />
          <CategoryCard
            categoryName="Governorship Election"
            categoryRegion="Lagos State"
          />
          <CategoryCard
            categoryName="Senatorial Election"
            categoryRegion="Senatorial zone"
          />
          <CategoryCard
            categoryName="House of Assembly Election"
            categoryRegion="Constituency"
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Vote;
