import {
  Box,
  Text,
  Icon,
  HStack,
  Pressable,
  Input,
  ScrollView,
  VStack,
  Image,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import VoteCard from "../components/voteCard";

const VoteCategory = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { category } = params;
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
          {category}
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={16}
          fontFamily="Poppins-Regular"
          mt={2}
        >
          Select your candidate of choice
        </Text>
      </Box>
      <Box p={4}>
        <Input
          size="xl"
          borderColor={color.primary}
          type="text"
          shadow="rgba(0, 0, 0, 0.25)"
          InputLeftElement={
            <Icon
              as={<Feather name="search" />}
              size={5}
              ml="2"
              color={color.primary}
            />
          }
          placeholder="Search candidate by name"
        />
        <ScrollView showsVerticalScrollIndicator={false} w="full" mt={6}>
          <VStack space={2}>
            <VoteCard />
            <VoteCard />
            <VoteCard />
            <VoteCard />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default VoteCategory;
