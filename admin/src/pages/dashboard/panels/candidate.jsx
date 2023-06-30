import { useState } from "react";
import { Text, Box, Button, Input, Textarea, Select } from "@chakra-ui/react";
import { colors } from "../../../utils/colors";

import IMG from "../../../images/ballot.png";
import CandidateCard from "../../../components/candidate_card";
import { statesOption } from "../utils/state";
import { toggleLGA } from "../utils/lga";

function Candidate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [lgaList, setLgaList] = useState([]);

  const [lga, setLga] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  console.log(state);

  const addCandidate = (event) => {
    event.preventDefault();

    // clear message state
    setErrorMsg(null);

    const isFieldsEmpty = email !== "" && password !== "";

    if (!isFieldsEmpty) {
      setErrorMsg("All fields are required!");
    } else {
      //  authUser();
      //  navigate("/dashboard");
    }
  };

  const populateLGA = (state) => {
    const lga = toggleLGA(state);
    setLgaList(lga);
  };

  return (
    <Box display="flex" w="100%" h={24} margin="auto 0" flexDirection="column">
      <Box display="flex" w="100%" margin="auto 0">
        <Box w="60%">
          <Text
            fontSize="16px"
            color={colors.grayText}
            mb="4px"
            mt="12px"
            mr="24px"
          >
            Add Electorial Candidate
          </Text>
          {errorMsg && (
            <Text
              my={2}
              color="red"
              fontSize="16px"
              sx={{
                textAlign: "start",
              }}
            >
              {errorMsg}
            </Text>
          )}
        </Box>
        <Box
          w="40%"
          display="flex"
          direction="column"
          justifyContent="space-between"
        >
          <Text fontSize="16px" color={colors.grayText} mb="4px" mt="12px">
            Candidate/Updates
          </Text>
        </Box>
      </Box>

      <Box display="flex" w="100%" margin="auto 0">
        <Box
          w="60%"
          display="flex"
          direction="column"
          justifyContent="space-between"
          pr={8}
        >
          {/* Input Left */}
          <Box w="48%" direction="column">
            <Box mt={8}>
              <Text fontSize="16px">Candidate Name</Text>
              <Input
                placeholder="Enter Candidate Name"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Text fontSize="16px" mt={2}>
                Party
              </Text>
              <Select
                placeholder="Select Candidate's Party"
                borderColor={colors.primary}
              >
                <option value="option1">PDP</option>
                <option value="option2">APC</option>
                <option value="option3">Labour Party</option>
              </Select>

              <Text fontSize="16px" mt={2}>
                Image Url
              </Text>
              <Input
                placeholder="Enter Image Link"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Text fontSize="16px" mt={2}>
                Details
              </Text>
              <Textarea
                placeholder="Enter Candidate Details"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Button
                bgColor={colors.primary}
                color="white"
                variant="solid"
                fontWeight="normal"
                mt={4}
                w="100%"
                onClick={addCandidate}
              >
                Add Candidate
              </Button>
            </Box>
          </Box>

          {/* Input Right */}
          <Box w="48%" direction="column">
            <Box mt={8}>
              <Text fontSize="16px" mt={2}>
                Category
              </Text>
              <Select
                placeholder="Select Category"
                borderColor={colors.primary}
              >
                <option value="option1">Presidential Election</option>
                <option value="option2">Governorship Election</option>
                <option value="option3">Senatorial Election</option>
                <option value="option3">House of Assembly Election</option>
              </Select>
              <Text fontSize="16px" mt={2}>
                Running Mate's Name
              </Text>
              <Input
                placeholder="Enter Name"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Text fontSize="16px" mt={2}>
                State
              </Text>
              <Select
                placeholder="Select State"
                borderColor={colors.primary}
                value={state}
                onChange={(event) => {
                  populateLGA(event.target.value);
                  setState(event.target.value);
                }}
              >
                {statesOption.map((item, i) => item)}
              </Select>
              <Text fontSize="16px" mt={2}>
                LGA
              </Text>
              <Select
                placeholder="Select LGA"
                borderColor={colors.primary}
                value={lga}
                onChange={(event) => setLga(event.target.value)}
              >
                {lgaList.map((item, i) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>

        {/*  Candidate/Updates */}
        <Box w="40%" height="50vh" overflow="scroll" pb={4}>
          <CandidateCard
            name="Sam Gregory"
            category="Presidential"
            party="PDP"
            imageUrl={IMG}
          />
          <CandidateCard
            name="Chike Olegbe"
            category="Governorship - Lagos"
            party="APC"
            imageUrl={IMG}
          />
          <CandidateCard
            name="Sam Gregory"
            category="Senatorial - Imo - Okigwe"
            party="Labour Party"
            imageUrl={IMG}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Candidate;
