import { Text, VStack, Pressable } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { useAuth } from "../../../utils/authProvider";

const CandidateCards = ({ candidate }) => {
  const router = useRouter();
  const { setPassedObject } = useAuth();

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
        setPassedObject({});
        setPassedObject(candidate);
        router.push({
          pathname: "/tabs/pages/candidate_details",
        });
      }}
    >
      <Image
        contentFit="fill"
        width={84}
        height={81}
        style={{ marginRight: 8, borderRadius: 8 }}
        source={candidate.imageUrl}
        alt="image"
      />
      <VStack width="80%" justifyContent="space-around">
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
