import { Text, Box, Flex } from "@chakra-ui/react";
import IconHolder from "./iconHolder";

export default function Stat({
  color,
  textColor,
  bgColor,
  children,
  title,
  number,
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor={color}
      borderRadius={8}
      px="24px"
      py="12px"
    >
      <IconHolder bgColor={bgColor} size={16}>
        {children}
      </IconHolder>
      <Flex direction="column" ml="24px" alignItems="center">
        <Text fontSize="16px" display="flex" color={textColor} mb="8px">
          {title}
        </Text>
        <Text fontSize="24px" display="flex" color={textColor}>
          {number}
        </Text>
      </Flex>
    </Box>
  );
}
