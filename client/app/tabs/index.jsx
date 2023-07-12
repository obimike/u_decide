import { Box, Text, HStack, ScrollView, VStack, Skeleton } from "native-base";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import color from "../../utils/color";
import NewsCard from "./components/newsCard";
import CandidateCards from "./components/candidateCards";
import { useRouter } from "expo-router";
import { auth, onAuthStateChanged, db, getDocs, collection } from "../firebase";

const Home = () => {
  const [currentUser, setCurrentUser] = useState();
  const [news, setNews] = useState([]);
  const [candidate, setCandidate] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        router.push("/");
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCandidates = async () => {
      const querySnapshot = await getDocs(collection(db, "candidates"));
      const fetchCandidate = [];
      querySnapshot.forEach((doc) => {
        const fetchItem = {
          id: doc.id,
          ...doc.data(),
        };
        fetchCandidate.push(fetchItem);
      });
      setCandidate(fetchCandidate);
    };

    return () => {
      getCandidates();
    };
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const querySnapshot = await getDocs(collection(db, "news"));
      const fetchNewsItems = [];
      querySnapshot.forEach((item) => {
        const fetchItem = {
          id: item.id,
          ...item.data(),
        };
        fetchNewsItems.push(fetchItem);
        // console.log(doc);
      });
      setNews(fetchNewsItems);
      console.log(fetchNewsItems);
    };

    return () => {
      getNews();
    };
  }, []);

  return (
    <Box h="100%">
      <Box backgroundColor={color.white}>
        <Text
          color={color.textColor}
          fontSize={24}
          padding={4}
          fontFamily="Poppins-Regular"
        >
          Hello, {currentUser?.displayName}
        </Text>
      </Box>

      <Box padding={4}>
        <Text fontFamily="Poppins-Regular" color={color.primary} fontSize={18}>
          News & Updates
        </Text>
        <Box my={4}>
          {news.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={4}>
                {news.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </HStack>
            </ScrollView>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={4}>
                <Box
                  w={285}
                  borderWidth="1"
                  space={8}
                  overflow="hidden"
                  rounded="lg"
                  borderColor={color.primary}
                >
                  <Skeleton h="40" startColor={color.background} />
                  <Skeleton.Text p="4" startColor={color.secondaryTextColor} />
                </Box>
                <Box
                  w={285}
                  borderWidth="1"
                  space={8}
                  overflow="hidden"
                  rounded="lg"
                  borderColor={color.primary}
                >
                  <Skeleton h="40" startColor={color.background} />
                  <Skeleton.Text p="4" startColor={color.secondaryTextColor} />
                </Box>
              </HStack>
            </ScrollView>
          )}
        </Box>
        <Text fontFamily="Poppins-Regular" color={color.primary} fontSize={18}>
          Candidates
        </Text>

        {candidate.length === 0 ? (
          <ScrollView showsVerticalScrollIndicator={false} h="48%">
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
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} h="48%">
            <VStack space={2} my={4}>
              {candidate.map((item) => (
                <CandidateCards key={item.id} candidate={item} />
              ))}
            </VStack>
          </ScrollView>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4C53DD",
  },
});

export default Home;
