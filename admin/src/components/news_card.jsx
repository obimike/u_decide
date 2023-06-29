import { Text, Image, Flex, Button } from "@chakra-ui/react";

import { colors } from "../utils/colors";

function NewsCard({ title, date, imageUrl }) {
  return (
    <Flex
      direction="row"
      alignItems="center"
      backgroundColor={colors.gray}
      padding={2}
      borderRadius={8}
      mb={2}
      mx={2}
    >
      <Image src={imageUrl} width={70} height={81} borderRadius={8} />
      <Flex direction="column" ml="12px">
        <Text fontSize="14px" color={colors.grayText} noOfLines={2}>
          {title}
        </Text>
        <Flex mt="8px" justifyContent="space-between" alignItems="center">
          <Text fontSize="12px" color={colors.grayText}>
            {date}
          </Text>
          <Button bgColor={colors.primary} size="xs">
            <Text fontSize="12px" color={colors.gray}>
              Delete
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NewsCard;
