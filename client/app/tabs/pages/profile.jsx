import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
  Image,
  ScrollView,
  VStack,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs/settings")}>
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
          Personal details
        </Text>
      </Box>
      <Box p={8}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center>
            <Image
              w={144}
              h={144}
              rounded="full"
              mr={2}
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </Center>
          <HStack mt={4}>
            <VStack width="65%">
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                First Name
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                Jerry
              </Text>
            </VStack>
            <VStack>
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                Last Name
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                Seijaro
              </Text>
            </VStack>
          </HStack>
          <VStack mt={4}>
            <Text
              color={color.secondaryTextColor}
              fontSize={14}
              fontFamily="Poppins-Regular"
            >
              Email Address
            </Text>
            <Text
              color={color.textColor}
              fontSize={16}
              fontFamily="Poppins-Regular"
            >
              Jerry_Seijaro@gmail.com
            </Text>
          </VStack>
          <HStack mt={4}>
            <VStack width="65%">
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                Gender
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                Male
              </Text>
            </VStack>
            <VStack>
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                NIN
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                13089063165
              </Text>
            </VStack>
          </HStack>
          <HStack mt={4}>
            <VStack width="65%">
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                Phone Number
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                2347037262901
              </Text>
            </VStack>
            <VStack>
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                Date of birth
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                29 July, 1999
              </Text>
            </VStack>
          </HStack>
          <HStack mt={4} width="100%">
            <VStack width="65%">
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                State
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                Lagos State
              </Text>
            </VStack>
            <VStack width="35%">
              <Text
                color={color.secondaryTextColor}
                fontSize={14}
                fontFamily="Poppins-Regular"
              >
                LGA
              </Text>
              <Text
                color={color.textColor}
                fontSize={16}
                fontFamily="Poppins-Regular"
              >
                Ikosi
              </Text>
            </VStack>
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Profile;
