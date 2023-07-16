import { Text, VStack, Pressable, HStack } from "native-base";
import React from "react";
import color from "../../../utils/color";
import { Image } from "expo-image";

import { numberWithCommas } from "../../../utils/helpers";

const ResultCard = ({ candidate }) => {
  return (
    <Pressable
      width="100%"
      rounded="lg"
      backgroundColor={color.white}
      overflow="hidden"
      display="flex"
      flexDir="row"
      p={2}
      borderWidth={1}
      borderColor={color.primary}
      mb={2}
    >
      <Image
        contentFit="fill"
        width={90}
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
          Votes:{" "}
          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            fontSize={20}
            noOfLines={1}
            isTruncated
            w="90%"
          >
            {numberWithCommas(candidate.vote)}
          </Text>
        </Text>
        <HStack justifyContent="space-between" w="90%">
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            fontSize={14}
            fontWeight="bold"
          >
            {candidate.party}
          </Text>
          <Text
            fontFamily="Poppins-Regular"
            color={color.secondaryTextColor}
            fontSize={14}
            fontWeight="bold"
          >
            {candidate.category === "Governorship Election" &&
              candidate.state + " State"}
            {candidate.category === "House of Assembly Election" &&
              candidate.state + " State - " + candidate.lga}
            {candidate.category === "Senatorial Election" &&
              candidate.state + " State - " + candidate.lga}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default ResultCard;
