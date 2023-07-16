import {
  Box,
  Text,
  HStack,
  Pressable,
  ScrollView,
  VStack,
  Button,
  Flex,
  Skeleton,
} from "native-base";
import { useState, useEffect } from "react";
import color from "../../../utils/color";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ResultCard from "../components/resultCard";
import {
  collection,
  query,
  where,
  getDocs,
  db,
  orderBy,
} from "../../../firebase";
import { numberWithCommas } from "../../../utils/helpers";

const LiveResults = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const [category, setCategory] = useState("Presidential Election");
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setResult([]);
    setVotes(0);
    const getResult = async () => {
      const q = query(
        collection(db, "candidates"),
        where("category", "==", category)
        // orderBy("vote", "desc")
      );
      const querySnapshot = await getDocs(q);
      const fetchResult = [];
      let count = 0;
      querySnapshot.forEach((doc) => {
        const fetchItem = {
          id: doc.id,
          ...doc.data(),
        };
        count = count + doc.data().vote;
        fetchResult.push(fetchItem);
      });
      setResult(fetchResult);
      console.log("votes: " + count);
      setVotes(count);
    };
    getResult();
  }, [category]);

  const handleSelected = (cat) => {
    if (cat === "Presidential") {
      setCategory("Presidential Election");
    } else if (cat === "Governorship") {
      setCategory("Governorship Election");
    } else if (cat === "Senatorial") {
      setCategory("Senatorial Election");
    } else if (cat === "House of Assembly") {
      setCategory("House of Assembly Election");
    }
    console.log(selected);
  };

  const buttons = [
    "Presidential",
    "Governorship",
    "Senatorial",
    "House of Assembly",
  ];

  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs/vote")}>
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
          Live Election Results
        </Text>
      </Box>
      <Box p={4}>
        <Flex direction="row" justifyContent="space-between">
          {buttons.map((buttonLabel, i) => (
            <Button
              size="sm"
              colorScheme="tertiary"
              key={i}
              name={buttonLabel}
              variant={i === selected ? "solid" : "outline"}
              onPress={() => {
                setSelected(i);
                handleSelected(buttonLabel);
              }}
            >
              {buttonLabel}
            </Button>
          ))}
        </Flex>

        <HStack my={4} justifyContent="space-around">
          <VStack alignItems="center">
            <Text
              color={color.secondaryTextColor}
              fontSize={14}
              fontFamily="Poppins-Regular"
            >
              Total Votes
            </Text>
            <Text
              color={color.textColor}
              fontSize={16}
              fontFamily="Poppins-Regular"
            >
              {numberWithCommas(votes)}
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Text
              color={color.secondaryTextColor}
              fontSize={14}
              fontFamily="Poppins-Regular"
            >
              {" "}
              <Feather
                name="clock"
                size={14}
                color={color.secondaryTextColor}
              />{" "}
              voting ends
            </Text>
            <Text
              color={color.textColor}
              fontSize={16}
              fontFamily="Poppins-Regular"
            >
              at 11:59pm today
            </Text>
          </VStack>
        </HStack>
        <Box>
          {result.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false} h="4/5">
              <VStack space={2} my={4}>
                {result.map((item) => (
                  <ResultCard key={item.id} candidate={item} />
                ))}
              </VStack>
            </ScrollView>
          ) : (
            <VStack space={2} my={4}>
              <Box
                width="100%"
                rounded="lg"
                overflow="hidden"
                display="flex"
                flexDir="row"
                shadow="6"
                p={2}
                backgroundColor={color.white}
              >
                <Skeleton w={84} h={81} rounded="lg" mr={4} />
                <VStack width="60%" justifyContent="space-between">
                  <Skeleton.Text
                    lines={1}
                    startColor={color.secondaryTextColor}
                  />
                  <Skeleton.Text lines={2} />
                </VStack>
              </Box>
              <Box
                width="100%"
                rounded="lg"
                overflow="hidden"
                display="flex"
                flexDir="row"
                shadow="6"
                p={2}
                backgroundColor={color.white}
              >
                <Skeleton w={84} h={81} rounded="lg" mr={4} />
                <VStack width="60%" justifyContent="space-between">
                  <Skeleton.Text
                    lines={1}
                    startColor={color.secondaryTextColor}
                  />
                  <Skeleton.Text lines={2} />
                </VStack>
              </Box>
            </VStack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LiveResults;
