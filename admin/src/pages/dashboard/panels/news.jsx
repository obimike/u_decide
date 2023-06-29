import { useState } from "react";
import { Text, Box, Button, Input, Textarea } from "@chakra-ui/react";
import { colors } from "../../../utils/colors";
import NewsCard from "../../../components/news_card";

import IMG from "../../../images/ballot.png";

function News() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const addNews = (event) => {
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
            Add News/Updates
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
            News/Updates
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
              <Text fontSize="16px">Title</Text>
              <Input
                placeholder="Enter Title"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Text fontSize="16px" mt={2}>
                Details
              </Text>
              <Textarea
                placeholder="Enter News Details"
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
                onClick={addNews}
              >
                Add News
              </Button>
            </Box>
          </Box>

          {/* Input Right */}
          <Box w="48%" direction="column">
            <Box mt={8}>
              <Text fontSize="16px">Date</Text>
              <Input
                placeholder="Select Date"
                borderColor={colors.primary}
                value={password}
                type="date"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Text fontSize="16px" mt={2}>
                Image Url
              </Text>
              <Input
                placeholder="Enter Image Link"
                value={email}
                borderColor={colors.primary}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Box>
          </Box>
        </Box>

        {/*  News/Updates */}
        <Box w="40%" height="50vh" overflow="scroll" pb={4}>
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="The quick brown fox jumps over the lazy dog is an English-language pangram—a 
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="The quick brown fox jumps over the lazy dog is an English-language pangram—a 
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
          <NewsCard
            title="This system being implemented would enable whistleblowers to reports of fraudulent."
            date="22 July, 2023"
            imageUrl={IMG}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default News;
