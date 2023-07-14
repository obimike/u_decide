import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
  ScrollView,
  VStack,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAuth } from "../../../utils/authProvider";
import { Image } from "expo-image";
import { formatDate } from "../../../utils/helpers";

const Profile = () => {
  const { User } = useAuth();
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
              width={160}
              height={160}
              style={{ borderRadius: 200 }}
              source={User?.imageUrl}
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
                {User?.firstName}
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
                {User?.lastName}
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
              {User?.email}
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
                {User?.gender}
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
                {User?.nin}
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
                {User?.phone}
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
                {new Date(formatDate(User?.dob.toDate())).toDateString()}
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
                {User?.state} State
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
                {User?.lga}
              </Text>
            </VStack>
          </HStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Profile;
