import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  ScrollView,
  VStack,
  Image,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const CandidateDetails = (props) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { name, party, detail } = params;
  // console.log(imageUrl);
  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs")}>
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
          {name}
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={16}
          fontFamily="Poppins-Regular"
          mt={2}
        >
          {party}
        </Text>
      </Box>
      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false} w="full">
          <Image
            w="100%"
            h={240}
            rounded="lg"
            mr={4}
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
            alt="image"
          />
          <Text
            color={color.textColor}
            fontSize={16}
            fontFamily="Poppins-Regular"
            alignSelf="center"
            mt={4}
            mb={96}
          >
            {detail}
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default CandidateDetails;
