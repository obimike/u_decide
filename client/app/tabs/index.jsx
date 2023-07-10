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
import NewsCard from "./components/newsCard";
import CandidateCards from "./components/candidateCards";

const Home = () => {
  return (
    <Box h="100%">
      <Box backgroundColor={color.white}>
        <Text
          color={color.textColor}
          fontSize={24}
          padding={4}
          fontFamily="Poppins-Regular"
        >
          Hello, Seijaro
        </Text>
      </Box>

      <Box padding={4}>
        <Text fontFamily="Poppins-Regular" color={color.primary} fontSize={18}>
          News & Updates
        </Text>
        <Box my={4}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={4}>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </HStack>
          </ScrollView>
        </Box>
        <Text fontFamily="Poppins-Regular" color={color.primary} fontSize={18}>
          Candidates
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} h="48%">
          <VStack space={2} my={4}>
            <CandidateCards />
            <CandidateCards />
            <CandidateCards />
            <CandidateCards />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4C53DD",
  },
});

export default Home;
