import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Stack,
  Pressable,
  Icon,
} from "native-base";
import color from "../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";

import { Link, useRouter } from "expo-router";

const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <Box padding={4}>
      <Text
        fontFamily="Poppins-Regular"
        color={color.primary}
        textAlign="center"
        fontSize="3xl"
      >
        U-Decide
      </Text>

      <Text
        fontFamily="Poppins-Regular"
        color={color.textColor}
        textAlign="left"
        fontSize="2xl"
        mt={12}
      >
        Login
      </Text>
      <Stack mt={8} space={4}>
        <Box>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            textAlign="left"
            fontSize="lg"
          >
            Nation Identity Number
          </Text>
          <Input
            size="xl"
            placeholder="Enter NIN"
            borderColor={color.primary}
          />
        </Box>
        <Box>
          <Text
            fontFamily="Poppins-Regular"
            color={color.textColor}
            textAlign="left"
            fontSize="lg"
          >
            Password
          </Text>
          <Input
            size="xl"
            borderColor={color.primary}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Enter Password"
          />
        </Box>
      </Stack>
      <Button
        marginTop={12}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        onPress={() => router.replace("/tabs")}
      >
        Log In
      </Button>

      <Flex mt={24} flexDir="row" justifyContent="center">
        <Text
          fontFamily="Poppins-Regular"
          color={color.textColor}
          textAlign="left"
          fontSize="lg"
        >
          Don’t have an account?
        </Text>
        <Link href="/auth/verify_nin">
          <Text
            fontFamily="Poppins-Regular"
            color={color.primary}
            textAlign="left"
            fontSize="lg"
          >
            {" "}
            Register
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
