import { Text, VStack, Pressable } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { useAuth } from "../../../utils/authProvider";

const VoteCard = ({ candidate }) => {
  const { setPassedObject } = useAuth();
  const router = useRouter();
  return (
    <Pressable
      width="100%"
      rounded="lg"
      backgroundColor={color.white}
      overflow="hidden"
      display="flex"
      flexDir="row"
      shadow="6"
      p={2}
      onPress={() => {
        setPassedObject({});
        setPassedObject(candidate);
        router.push("/tabs/pages/confirm_vote");
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
          noOfLines={1}
          isTruncated
          w="90%"
        >
          {candidate.category === "Presidential Election" &&
            "Running mate: " + candidate.runningMate}
          {candidate.category === "Governorship Election" &&
            candidate.state + " State"}
          {candidate.category === "House of Assembly Election" &&
            candidate.state + " State - " + candidate.lga}
          {candidate.category === "Senatorial Election" &&
            candidate.state + " State - " + candidate.lga}
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          fontWeight="bold"
          fontSize={14}
          noOfLines={1}
          isTruncated
          w="90%"
        >
          Party: {candidate.party}
        </Text>
      </VStack>
    </Pressable>
  );
};

export default VoteCard;
