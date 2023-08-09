import { Box, Text, HStack, Pressable, ScrollView, Center } from "native-base";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../../../utils/authProvider";
import { format } from "date-fns";
import { Image } from "expo-image";

const NewsDetails = () => {
  const { newsObject } = useAuth();
  const router = useRouter();
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
            News/Update
          </Text>
        </Center>
        <Text
          color={color.textColor}
          fontSize={20}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          {newsObject.title}
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={14}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          {format(new Date(newsObject.date), "do, MMMM yyyy")}
        </Text>
      </Box>
      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false} w="full">
          <Image
            width="100%"
            height={240}
            style={{ marginRight: 8, borderRadius: 8 }}
            source={newsObject.imageUrl}
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
            {newsObject.detail}
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default NewsDetails;
