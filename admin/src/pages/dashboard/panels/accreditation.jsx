import { useState, useEffect } from "react";
import { Text, Box, Center } from "@chakra-ui/react";
import VotersCard from "../../../components/voters_card";
import { colors } from "../../../utils/colors";
import {
  collection,
  db,
  getDocs,
  deleteDoc,
  doc,
  query,
} from "../../../firebase";
import AccreditedCard from "../../../components/voters";

const item = {
  name: "Joe Randal",
  state: "Lagos",
  imageUrl:
    "https://nation-media-assets.storage.googleapis.com/wp-content/uploads/2023/07/15080826/Afolabi.jpg",
  nin: "10345687890",
  lga: "Kosofe",
};

const Accreditation = () => {
  const [unaccreditedVoters, setUnaccreditedVoters] = useState([]);
  const [accreditedVoters, setAccreditedVoters] = useState([]);

  useEffect(() => {
    const getUserCount = async () => {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const fetchUnaccreditedVoters = [];
      const fetchAccreditedVoters = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === true) {
          const fetchItems = {
            id: doc.id,
            ...doc.data(),
          };
          fetchAccreditedVoters.push(fetchItems);
        } else if (doc.data().isApproved === false) {
          const fetchItems = {
            id: doc.id,
            ...doc.data(),
          };
          fetchUnaccreditedVoters.push(fetchItems);
        }
      });
      setUnaccreditedVoters(fetchUnaccreditedVoters);
      setAccreditedVoters(fetchAccreditedVoters);
    };
    getUserCount();
  }, [accreditedVoters]);

  const accreditate = async (id) => {};

  return (
    <Box display="flex" w="100%" h={24} margin="auto 0" flexDirection="column">
      <Box
        display="flex"
        w="100%"
        margin="auto 0"
        justifyContent="space-between"
      >
        <Box w="45%" height="50vh" overflow="scroll" pb={4}>
          <Text
            fontSize="16px"
            color={colors.grayText}
            mb="8px"
            mt="12px"
            mr="24px"
            fontWeight="bold"
          >
            Unaccredited Voters ({unaccreditedVoters.length})
          </Text>
          {accreditedVoters.length === 0 && (
            <Center>
              <Text
                fontSize="18px"
                alignSelf="center"
                fontWeight="bold"
                mt={24}
              >
                No Unaccredited Voter.
              </Text>
            </Center>
          )}
          {accreditedVoters.map((item) => (
            <VotersCard key={item.id} voters={item} onClick={accreditate} />
          ))}
        </Box>
        <Box w="45%" height="50vh" overflow="scroll" pb={4}>
          <Text
            fontSize="16px"
            fontWeight="bold"
            color={colors.grayText}
            mb="8px"
            mt="12px"
          >
            Accredited Voters ({accreditedVoters.length})
          </Text>
          {accreditedVoters.length === 0 && (
            <Center>
              <Text
                fontSize="18px"
                alignSelf="center"
                fontWeight="bold"
                mt={24}
              >
                No Accredited Voter.
              </Text>
            </Center>
          )}
          {accreditedVoters.map((item) => (
            <AccreditedCard key={item.id} voters={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Accreditation;
