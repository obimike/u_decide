import { useState } from "react";
import { Text, Box, Button, Input } from "@chakra-ui/react";
import { colors } from "../../../utils/colors";

export default function ElectionDate() {
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const confirmDate = (event) => {
    event.preventDefault();

    setErrorMsg(null);

    if (date === "") {
      setErrorMsg("Please pick a date!");
    } else {
      //  authUser();
      // navigate("/dashboard");
    }

    console.log(date);
  };

  return (
    <Box>
      <Text
        fontSize="16px"
        color={colors.grayText}
        mb="4px"
        mt="12px"
        mr="24px"
      >
        Election date
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

      <Box mt={8} w="40%">
        <Text fontSize="16px">Select Date</Text>
        <Input
          placeholder="Select Date"
          borderColor={colors.primary}
          value={date}
          type="date"
          onChange={(event) => setDate(event.target.value)}
        />
        <Button
          bgColor={colors.primary}
          //   _hover={colors.grayText}
          color="white"
          variant="solid"
          fontWeight="normal"
          mt={4}
          w="100%"
          onClick={confirmDate}
        >
          Add News
        </Button>
      </Box>
    </Box>
  );
}
