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
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <Box>
      <Text>Profile</Text>
    </Box>
  );
};

export default Profile;
