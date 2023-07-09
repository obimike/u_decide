import { Box, Text, Button, Flex, Input, Pressable, Image } from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import IMAGE from "../../assets/images/biometrics.png";

const Biometrics = () => {
  const router = useRouter();
  return (
    <Box padding={4}>
      <Flex flexDir="row" mb={8} alignItems="center">
        <Pressable onPress={() => router.back()}>
          <MaterialIcons
            name="chevron-left"
            size={48}
            color={color.textColor}
          />
        </Pressable>
        <Text
          fontFamily="Poppins-Regular"
          pl={2}
          fontSize="xl"
          color={color.textColor}
        >
          Back
        </Text>
      </Flex>

      <Text
        fontFamily="Poppins-Regular"
        color={color.primary}
        textAlign="left"
        fontSize="3xl"
      >
        Biometric verification
      </Text>
      <Text
        fontFamily="Poppins-Regular"
        color={color.secondaryTextColor}
        textAlign="left"
        fontSize="md"
        mb={6}
      >
        Choose how to do your biometrics.
      </Text>

      <Image width="5/6" height={368} source={IMAGE} alt="Intro Image 1" />

      <Button
        marginTop={6}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        onPress={() => router.push("/auth/pin")}
      >
        Biometrical recognition
      </Button>
      <Button
        marginTop={6}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        // onPress={() => handleSizeClick()}
      >
        Book a date for pysical biometric
      </Button>
    </Box>
  );
};

export default Biometrics;
