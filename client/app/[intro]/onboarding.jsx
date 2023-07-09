import { Box, Text, Button, Center, Image, Flex } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import PagerView from "react-native-pager-view";

import Intro1 from "../../assets/images/intro_1.png";
import Intro2 from "../../assets/images/intro_2.png";
import Intro3 from "../../assets/images/intro_3.png";
import color from "../../utils/color";

const OnBoardingPage = () => {
  return (
    <Box padding={4} height="100%">
      <PagerView style={styles.viewPager} initialPage={0}>
        <Box style={styles.page} key="1">
          <Image width="5/6" height={368} source={Intro1} alt="Intro Image 1" />
          <Center paddingX={8}>
            <Text
              marginTop={8}
              color={color.textColor}
              fontFamily="Poppins-Regular"
              fontSize="3xl"
            >
              Your Vote Counts
            </Text>
            <Text
              marginTop={4}
              color={color.secondaryTextColor}
              fontFamily="Poppins-Regular"
              fontSize="lg"
            >
              Exercise your civil responsibility, let your voice be heard with
              your vote and more importantly let your vote counts.
            </Text>
          </Center>
          <Flex flexDir="row" mt={3}>
            <Box
              h={2}
              w={8}
              backgroundColor={color.primary}
              borderRadius={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
              mx={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
            ></Box>
          </Flex>
        </Box>
        <Box style={styles.page} key="2">
          <Image width="5/6" height={368} source={Intro2} alt="Intro Image 2" />
          <Center paddingX={8}>
            <Text
              marginTop={8}
              color={color.textColor}
              fontFamily="Poppins-Regular"
              fontSize="3xl"
            >
              Safe and Secure
            </Text>
            <Text
              marginTop={4}
              color={color.secondaryTextColor}
              fontFamily="Poppins-Regular"
              fontSize="lg"
            >
              Guarantee safety for both votes and the voter as no physical
              presence is not required.
            </Text>
          </Center>
          <Flex flexDir="row" mt={3}>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.primary}
              borderRadius={4}
              mx={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
            ></Box>
          </Flex>
        </Box>
        <Box style={styles.page} key="3">
          <Image width="5/6" height={368} source={Intro3} alt="Intro Image 3" />
          <Center paddingX={8}>
            <Text
              marginTop={8}
              color={color.textColor}
              fontFamily="Poppins-Regular"
              fontSize="3xl"
            >
              Free, Fair and Verifiable
            </Text>
            <Text
              marginTop={4}
              color={color.secondaryTextColor}
              fontFamily="Poppins-Regular"
              fontSize="lg"
            >
              This system ensures that the election is conducted with fairness,
              transparency and the results are all verifiable.
            </Text>
          </Center>
          <Flex flexDir="row" mt={3}>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.background}
              borderRadius={4}
              mx={4}
            ></Box>
            <Box
              h={2}
              w={8}
              backgroundColor={color.primary}
              borderRadius={4}
            ></Box>
          </Flex>
        </Box>
      </PagerView>

      <Center>
        <Link href="/auth/verify_nin" asChild replace>
          <Button
            marginTop={4}
            backgroundColor={color.primary}
            size="lg"
            width="90%"
            textAlign="center"
            _text={{ fontFamily: "Poppins-Regular" }}
          >
            Create on account
          </Button>
        </Link>
        <Link href="/auth" asChild replace>
          <Button
            marginTop={4}
            width="90%"
            size="lg"
            variant="outline"
            borderColor={color.primary}
            _text={{ color: color.primary, fontFamily: "Poppins-Regular" }}
          >
            Log In
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardingPage;
