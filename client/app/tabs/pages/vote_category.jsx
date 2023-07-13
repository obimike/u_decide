import {
  Box,
  Text,
  Icon,
  HStack,
  Pressable,
  Input,
  ScrollView,
  VStack,
  Skeleton,
  Flex,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import VoteCard from "../components/voteCard";

import { collection, query, where, getDocs, db } from "../../../firebase";

const VoteCategory = () => {
  const [result, setResult] = useState([]);

  const router = useRouter();
  const params = useLocalSearchParams();
  const { category } = params;

  console.log(category);

  useEffect(() => {
    const getCandidates = async () => {
      const q = query(
        collection(db, "candidates"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);

      const fetchResult = [];
      querySnapshot.forEach((doc) => {
        const fetchItem = {
          id: doc.id,
          ...doc.data(),
        };
        fetchResult.push(fetchItem);
      });
      setResult(fetchResult);
      console.log("Electorial Candiduate  Loaded");
    };
    getCandidates();
  }, [category]);

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

        {result.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false} h="48%">
            <VStack space={2} my={4}>
              {result.map((item) => (
                <VoteCard key={item.id} candidate={item} />
              ))}
            </VStack>
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} h="68%">
            <VStack space={2} my={4}>
              <Box
                width="100%"
                rounded="lg"
                overflow="hidden"
                display="flex"
                flexDir="row"
                shadow="6"
                p={2}
                backgroundColor={color.white}
              >
                <Skeleton w={84} h={81} rounded="lg" mr={4} />
                <VStack width="60%" justifyContent="space-between">
                  <Skeleton.Text
                    lines={1}
                    startColor={color.secondaryTextColor}
                  />
                  <Skeleton.Text lines={2} />
                </VStack>
              </Box>
              <Box
                width="100%"
                rounded="lg"
                overflow="hidden"
                display="flex"
                flexDir="row"
                shadow="6"
                p={2}
                backgroundColor={color.white}
              >
                <Skeleton w={84} h={81} rounded="lg" mr={4} />
                <VStack width="60%" justifyContent="space-between">
                  <Skeleton.Text
                    lines={1}
                    startColor={color.secondaryTextColor}
                  />
                  <Skeleton.Text lines={2} />
                </VStack>
              </Box>
            </VStack>
          </ScrollView>
        )}
      </Box>
    </Box>
  );
};

export default VoteCategory;
