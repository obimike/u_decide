import { useState, useEffect } from "react";
import { Text, Box, Center } from "@chakra-ui/react";
import VotersCard from "../../../components/voters_card";
import { colors } from "../../../utils/colors";
import {
  collection,
  db,
  getDocs,
  doc,
  query,
  updateDoc,
} from "../../../firebase";
import AccreditedCard from "../../../components/accredited_card";

const Accreditation = () => {
  const [unaccreditedVoters, setUnaccreditedVoters] = useState([]);
  const [accreditedVoters, setAccreditedVoters] = useState([]);
  const [updateVoters, setUpdateVoters] = useState(false);

  useEffect(() => {
    const getVoters = async () => {
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
     
      console.count("fetchAccreditedVoters");
    };
    getVoters();
  }, [updateVoters]);

  const accreditate = async (id) => {
    console.log(id);
    console.log(unaccreditedVoters);
    await updateDoc(doc(db, "users", id), {
      isApproved: true,
    }).catch((e) => console.log(e));
    setUpdateVoters(!updateVoters)
  };

  const unaccreditate = async (id) => {
    console.log(id);
    console.log(unaccreditedVoters);
    await updateDoc(doc(db, "users", id), {
      isApproved: false,
    }).catch((e) => console.log(e));
    setUpdateVoters(!updateVoters)
  };

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
          {unaccreditedVoters.length === 0 && (
            <Center>
              <Text
                fontSize="18px"
                alignSelf="center"
                fontWeight="bold"
                mt={24}
              >
                No Unaccredited Voters.
              </Text>
            </Center>
          )}
          {unaccreditedVoters.map((item) => (
            <VotersCard key={item.id} voters={item} onClick={accreditate} />
          ))}
          {/* <VotersCard voters={item} onClick={accreditate} /> */}
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
                No Accredited Voters.
              </Text>
            </Center>
          )}
          {accreditedVoters.map((item) => (
            <AccreditedCard key={item.id} voters={item} onClick={unaccreditate} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Accreditation;
