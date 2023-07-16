import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  VStack,
} from "native-base";
import color from "../../utils/color";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { auth } from "../../firebase";
import { useAuth } from "../../utils/authProvider";
import { Image } from "expo-image";

const Settings = () => {
  const router = useRouter();
  const { currentUser, User } = useAuth();
  return (
    <Box>
      <HStack backgroundColor={color.white} padding={4} pt={8}>
        <Image
          width={48}
          height={48}
          style={{ borderRadius: 24, marginRight: 8 }}
          source={User?.imageUrl}
          alt="image"
        />
        <VStack alignSelf="center">
          <Text
            color={color.textColor}
            fontSize={20}
            fontFamily="Poppins-Regular"
          >
            {currentUser?.displayName}
          </Text>
          <Text
            color={color.secondaryTextColor}
            fontSize={14}
            fontFamily="Poppins-Regular"
          >
            {User?.state} State
          </Text>
        </VStack>
      </HStack>
      <Box padding={4}>
        <Text
          fontFamily="Poppins-Regular"
          color={color.primary}
          fontSize={18}
          mb={2}
        >
          Profile
        </Text>
        <Pressable onPress={() => router.push("/tabs/pages/profile")}>
          <HStack p={2} py={4} backgroundColor={color.white} rounded={8}>
            <Feather name="user" size={24} color={color.secondaryTextColor} />
            <Text
              fontFamily="Poppins-Regular"
              color={color.textColor}
              fontSize={16}
              ml={3}
              alignSelf="center"
            >
              Personal details
            </Text>
          </HStack>
        </Pressable>
        <Text
          fontFamily="Poppins-Regular"
          color={color.primary}
          fontSize={18}
          mt={6}
          mb={2}
        >
          Security
        </Text>
        <Pressable onPress={() => router.push("/tabs/pages/change_password")}>
          <HStack
            p={2}
            py={4}
            backgroundColor={color.white}
            rounded={8}
            borderColor={color.primary}
          >
            <Feather name="lock" size={24} color={color.secondaryTextColor} />
            <Text
              fontFamily="Poppins-Regular"
              color={color.textColor}
              fontSize={16}
              ml={3}
              alignSelf="center"
            >
              Change Password
            </Text>
          </HStack>
        </Pressable>

        <Pressable mt={2} onPress={() => router.push("/tabs/pages/change_pin")}>
          <HStack
            p={2}
            py={4}
            backgroundColor={color.white}
            rounded={8}
            borderColor={color.primary}
          >
            <Feather name="key" size={24} color={color.secondaryTextColor} />
            <Text
              fontFamily="Poppins-Regular"
              color={color.textColor}
              fontSize={16}
              ml={3}
              alignSelf="center"
            >
              Change Voting PIN
            </Text>
          </HStack>
        </Pressable>
        <Text
          fontFamily="Poppins-Regular"
          color={color.primary}
          fontSize={18}
          mt={6}
          mb={2}
        >
          More Information
        </Text>
        <Pressable onPress={() => router.push("/tabs/pages/terms")}>
          <HStack
            p={2}
            py={4}
            backgroundColor={color.white}
            rounded={8}
            borderColor={color.primary}
          >
            <Feather
              name="file-text"
              size={24}
              color={color.secondaryTextColor}
            />
            <Text
              fontFamily="Poppins-Regular"
              color={color.textColor}
              fontSize={16}
              ml={3}
              alignSelf="center"
            >
              Terms and condition
            </Text>
          </HStack>
        </Pressable>
      </Box>

      <Center mt={24}>
        <Button
          backgroundColor={color.error}
          size="lg"
          rounded="lg"
          px={8}
          onPress={() => {
            auth.signOut();
            router.push("/auth");
          }}
        >
          <Text fontFamily="Poppins-Regular" color={color.white} fontSize={14}>
            Log Out
          </Text>
        </Button>
      </Center>
    </Box>
  );
};

export default Settings;
