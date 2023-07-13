import { Text, VStack, Pressable, Image } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter, useLocalSearchParams } from "expo-router";

const CandidateCards = ({ candidate }) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const imageUrl = candidate.imageUrl;
  return (
    <Pressable
      width="100%"
      rounded="lg"
      shadow="6"
      backgroundColor={color.white}
      overflow="hidden"
      display="flex"
      flexDir="row"
      p={2}
      onPress={() => {
        router.push({
          pathname: "/tabs/pages/candidate_details",
          params: {
            name: candidate.name,
            party: candidate.party,
            detail: candidate.detail,
            imageUrl: candidate.imageUrl,
          },
        });
        // router.push("/tabs/pages/candidate_details", { candidate: candidate });
      }}
    >
      <Image
        w={84}
        h={81}
        rounded="lg"
        mr={4}
        source={{
          uri: candidate.imageUrl,
        }}
        alt="image"
      />
      <VStack width="80%" justifyContent="space-between">
        <Text
          fontFamily="Poppins-Regular"
          color={color.textColor}
          fontSize={18}
        >
          {candidate.name}
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          fontSize={16}
          noOfLines={2}
          isTruncated
          w="90%"
        >
          {candidate.detail}
        </Text>
      </VStack>
    </Pressable>
  );
};

export default CandidateCards;
