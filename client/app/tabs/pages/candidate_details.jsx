import { Box, Text, HStack, Pressable, ScrollView } from "native-base";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

const CandidateDetails = (props) => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { name, party, detail, imageUrl } = params;
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
            width="100%"
            height={240}
            style={{ marginRight: 8, borderRadius: 8 }}
            source={imageUrl}
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
