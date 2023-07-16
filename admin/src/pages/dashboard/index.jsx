import {
  Text,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Center,
  Avatar,
  PopoverArrow,
  PopoverBody,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { colors } from "../../utils/colors";

import { FiUsers, FiCheckSquare, FiCalendar } from "react-icons/fi";
import Stat from "../../components/stat";
import News from "./panels/news";
import ElectionDate from "./panels/election_date";
import Candidate from "./panels/candidate";
import { onAuthStateChanged, auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, getDoc, doc, query, collection, getDocs } from "../../firebase";

function Dashboard() {
  const [currentUser, setCurrentUser] = useState();
  const [electionDate, setElectionDate] = useState("2023-06-22");
  const [userCount, setUserCount] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [presidentVotes, setPresidentVotes] = useState(0);
  const [governorshipVotes, setGovernorshipVotes] = useState(0);
  const [senatorVotes, setSenatorVotes] = useState(0);
  const [HOAVotes, setHOAVotes] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        navigate("/");
      }
    });
    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    const getDate = async () => {
      const docRef = doc(db, "elections", "date");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setElectionDate(docSnap.data().date.toString());
      } else {
        console.log("No such document!");
      }
    };

    return () => {
      getDate();
    };
  }, []);

  useEffect(() => {
    const getResult = async () => {
      const q = query(
        collection(db, "candidates")
        // orderBy("vote", "desc")
      );
      const querySnapshot = await getDocs(q);
      let countPresident = 0;
      let countGovernorship = 0;
      let countSenatorial = 0;
      let countHOA = 0;
      let count = 0;
      querySnapshot.forEach((doc) => {
        count = count + doc.data().vote;

        if (doc.data().category === "Presidential Election") {
          countPresident = countPresident + doc.data().vote;
        } else if (doc.data().category === "Governorship Election") {
          countGovernorship = countGovernorship + doc.data().vote;
        } else if (doc.data().category === "Senatorial Election") {
          countSenatorial = countSenatorial + doc.data().vote;
        } else if (doc.data().category === "House of Assembly Election") {
          countHOA = countHOA + doc.data().vote;
        }
      });

      console.log("votes: " + count);
      setTotalVotes(count);
      setPresidentVotes(countPresident);
      setGovernorshipVotes(countGovernorship);
      setSenatorVotes(countSenatorial);
      setHOAVotes(countHOA);
    };
    getResult();
  }, []);

  useEffect(() => {
    const getUserCount = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      let count = 0;
      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          count = count + 1;
        }
      });
      setUserCount(count);
    };
    getUserCount();
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Box>
      <Box
        display="flex"
        h="75px"
        bg={colors.primary}
        w="100%"
        px={12}
        alignItems="center"
        justifyContent="space-between"
        marginBottom="24px"
      >
        <Text fontSize="24px" display="flex" color="white">
          U-Decide
        </Text>
        <Flex alignItems="center">
          <Text fontSize="18px" display="flex" color="white" mr="16px">
            Hello, {currentUser?.displayName}
          </Text>

          <Popover>
            <PopoverTrigger>
              <Avatar
                name={currentUser?.displayName}
                style={{ cursor: "pointer" }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Center>
                  <VStack p={4}>
                    <Avatar name={currentUser?.displayName} size="2xl" />
                    <Text fontSize="18px" display="flex" color="black">
                      {currentUser?.displayName}
                    </Text>
                    <Text fontSize="18px" display="flex" color="black">
                      {currentUser?.email}
                    </Text>
                    <Button
                      colorScheme="red"
                      size="lg"
                      px={8}
                      onClick={() => {
                        auth.signOut();
                        navigate("/");
                      }}
                    >
                      Log Out
                    </Button>
                  </VStack>
                </Center>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>

      <Box maxW={1440} margin="0 auto">
        <Text fontSize="24px" display="flex" color={colors.grayText} mb="12px">
          Statistics
        </Text>
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Total Registered Voters"
            number={numberWithCommas(userCount)}
          >
            <FiUsers fontSize={24} color={colors.gray} />
          </Stat>

          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Total Votes Casted"
            number={numberWithCommas(totalVotes)}
          >
            <FiCheckSquare fontSize={24} color={colors.gray} />
          </Stat>

          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Election Date"
            number="Sat, 7 February 2023"
            date={electionDate}
          >
            <FiCalendar fontSize={24} color={colors.gray} />
          </Stat>
        </Box>

        <Center>
          <HStack mt="24px" spacing={4}>
            <VStack
              borderColor={colors.primary}
              borderWidth={1}
              rounded={8}
              spacing={0}
              p={2}
              backgroundColor="#fff"
            >
              <Text fontSize="16px" display="flex" color={colors.grayText}>
                Presidential Election
              </Text>
              <Text fontSize="24px" display="flex" color={colors.grayText}>
                Votes: {numberWithCommas(presidentVotes)}
              </Text>
            </VStack>
            <VStack
              borderColor={colors.primary}
              borderWidth={1}
              rounded={8}
              spacing={0}
              p={2}
              backgroundColor="#fff"
            >
              <Text fontSize="16px" display="flex" color={colors.grayText}>
                Governorship Election
              </Text>
              <Text fontSize="24px" display="flex" color={colors.grayText}>
                Votes: {numberWithCommas(governorshipVotes)}
              </Text>
            </VStack>
            <VStack
              borderColor={colors.primary}
              borderWidth={1}
              rounded={8}
              spacing={0}
              p={2}
              backgroundColor="#fff"
            >
              <Text fontSize="16px" display="flex" color={colors.grayText}>
                Senatorial Election
              </Text>
              <Text fontSize="24px" display="flex" color={colors.grayText}>
                Votes: {numberWithCommas(senatorVotes)}
              </Text>
            </VStack>
            <VStack
              borderColor={colors.primary}
              borderWidth={1}
              rounded={8}
              spacing={0}
              p={2}
              backgroundColor="#fff"
            >
              <Text fontSize="16px" display="flex" color={colors.grayText}>
                House of Assembly Election
              </Text>
              <Text fontSize="24px" display="flex" color={colors.grayText}>
                Votes: {numberWithCommas(HOAVotes)}
              </Text>
            </VStack>
          </HStack>
        </Center>
        <Text
          fontSize="24px"
          display="flex"
          color={colors.grayText}
          mb="12px"
          mt="24px"
        >
          Activities
        </Text>

        <Box>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList backgroundColor={colors.gray} borderRadius={8} padding={2}>
              <Tab borderRadius={8}>News/Updates</Tab>
              <Tab borderRadius={8}>Electoral Candidates</Tab>
              <Tab borderRadius={8}>Elections Date</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <News />
              </TabPanel>
              <TabPanel>
                <Candidate />
              </TabPanel>
              <TabPanel>
                <ElectionDate value={setElectionDate} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      {/* <Box bg={colors.primary} w="100%" py={2} bottom={0}>
        <Text fontSize="16px" color="white" textAlign="center">
          &copy; 2023, U-Decide
        </Text>
      </Box> */}
    </Box>
  );
}

export default Dashboard;
