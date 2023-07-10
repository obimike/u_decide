import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  KeyboardAvoidingView,
  Input,
  ScrollView,
  VStack,
  Image,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const NewsDetails = () => {
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
        <Text
          color={color.textColor}
          fontSize={20}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          The office of the presidency has charged INEC to ensure free and fair
          electios.
        </Text>
        <Text
          color={color.secondaryTextColor}
          fontSize={14}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          2nd February, 2023
        </Text>
      </Box>
      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false} w="full">
          <Image
            w="100%"
            h={240}
            rounded="lg"
            mr={4}
            source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
            }}
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
            A writer often needs references for his papers. Sometimes he quotes
            or takes several sentences from the reference source. In this case,
            the rewriter or paraphrasing tool can be used as an alternative
            method to make the quoted text not detect as plagiarism. The
            plagiarism issue is a complicated situation during the process of
            writing a paper or article. Hence, many ways can be implemented to
            avoid plagiarism, for example, using a paraphrasing tool or an
            article rewriter tool. For the best and maximal rewrite quality
            results, you better read again and make a few corrections if needed
            on the bestrewriter.com paraphrasing results. But definitely, your
            spending time and thought on re-reading. A writer often needs
            references for his papers. Sometimes he quotes or takes several
            sentences from the reference source. In this case, the rewriter or
            paraphrasing tool can be used as an alternative method to make the
            quoted text not detect as plagiarism. The plagiarism issue is a
            complicated situation during the process of writing a paper or
            article. Hence, many ways can be implemented to avoid plagiarism,
            for example, using a paraphrasing tool or an article rewriter tool.
            For the best and maximal rewrite quality results, you better read
            again and make a few corrections if needed on the bestrewriter.com
            paraphrasing results. But definitely, your spending time and thought
            on re-reading.
          </Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default NewsDetails;
