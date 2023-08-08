import { Text, Image, Flex } from "@chakra-ui/react";
import { colors } from "../utils/colors";

function AccreditedCard({ voters }) {
  return (
    <>
      <Flex
        direction="row"
        alignItems="center"
        backgroundColor={colors.gray}
        padding={2}
        borderRadius={8}
        mb={2}
        mx={2}
      >
        <Image
          src={voters.imageUrl}
          width="96px"
          height={81}
          borderRadius={8}
        />
        <Flex
          direction="column"
          ml="12px"
          w="100%"
          justifyContent="space-between"
        >
          <Text fontSize="20px" color={colors.grayText} noOfLines={2}>
            {voters.name}
          </Text>

          <Text fontSize="16px" color={colors.grayText} fontWeight="bold">
            {voters.nin}
          </Text>
          <Text fontSize="16px" color={colors.primary}>
            {voters.state && `${voters.state} (State)`}
            {" - "}
            {voters.lga && `  ${voters.lga} (LGA)`}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default AccreditedCard;
