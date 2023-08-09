import { Box, Text, HStack, Pressable, ScrollView, Center } from "native-base";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { useAuth } from "../../../utils/authProvider";

const CandidateDetails = () => {
  const router = useRouter();
  const { passedObject } = useAuth();
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
        <Center>
          <Text
            color={color.textColor}
            fontSize={24}
            fontFamily="Poppins-Regular"
            my={4}
          >
            Electorial Candidate
          </Text>
        </Center>
        <Text
          color={color.textColor}
          fontSize={20}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          {passedObject.name}
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={16}
          fontFamily="Poppins-Regular"
          mt={2}
        >
          Party: {passedObject.party}
        </Text>
      </Box>
      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false} w="full">
          <Image
            width="100%"
            height={240}
            style={{ marginRight: 8, borderRadius: 8 }}
            source={passedObject.imageUrl}
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
            {passedObject.detail}
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default CandidateDetails;
