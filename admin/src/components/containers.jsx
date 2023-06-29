import { Center, Box } from "@chakra-ui/react";

export function SiteBodyMaxWidth({ children }) {
  console.log(children);
  return (
    <Box
      maxW={1024}
      height="100vh"
      //   backgroundColor="darkmagenta"
      margin="0 auto"
    >
      {children}
    </Box>
  );
}
