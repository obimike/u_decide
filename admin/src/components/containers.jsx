import { Box } from "@chakra-ui/react";

export function SiteBodyMaxWidth({ children }) {
  return (
    <Box
      maxW={1024}
      //   height="100vh"
      //   backgroundColor="darkmagenta"
      margin="0 auto"
    >
      {children}
    </Box>
  );
}
