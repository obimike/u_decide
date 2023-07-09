import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Pressable,
  Icon,
  Modal,
  Center,
} from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { useState } from "react";
import DialogResponse from "./response_modal";

const VerifyNIN = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iconName, setIconName] = useState();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("");
  const [iconColor, setIconColor] = useState();
  const [buttonText, setButtonText] = useState("");

  const handleSizeClick = () => {
    setIconName("thumbs-down");
    setIconColor(color.error);
    setButtonText("Proceed");
    setRoute("/auth/register");
    setTitle("Verification Successful");
    setMessage(
      "Congratulations you are eligible to vote, please proceed by clicking on the button below to complete your registration.."
    );
    setModalVisible(!modalVisible);
  };

  const router = useRouter();

  return (
    <>
      <Box padding={4}>
        <Flex flexDir="row" mb={8} alignItems="center">
          <Pressable onPress={() => router.push("/auth")}>
            <Icon
              as={<MaterialIcons name="chevron-left" />}
              size={10}
              color={color.textColor}
            />
          </Pressable>
          <Text
            fontFamily="Poppins-Regular"
            pl={2}
            fontSize="xl"
            color={color.textColor}
          >
            Login
          </Text>
        </Flex>

        <Text
          fontFamily="Poppins-Regular"
          color={color.primary}
          textAlign="left"
          fontSize="3xl"
        >
          NIN verification
        </Text>
        <Text
          fontFamily="Poppins-Regular"
          color={color.secondaryTextColor}
          textAlign="left"
          fontSize="md"
        >
          Your NIN is used to verify your eligibility to vote.
        </Text>

        <Box mt={8}>
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

        <Button
          marginTop={6}
          backgroundColor={color.primary}
          size="lg"
          width="100%"
          textAlign="center"
          _text={{ fontFamily: "Poppins-Regular" }}
          onPress={() => handleSizeClick()}
        >
          Continue
        </Button>
      </Box>

      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        size="lg"
        closeOnOverlayClick={false}
      >
        <Modal.Content>
          <Modal.Body>
            <ResponseModal
              title={title}
              iconColor={iconColor}
              iconName={iconName}
              message={message}
              buttonText={buttonText}
              route={route}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const ResponseModal = ({
  iconName,
  iconColor,
  title,
  message,
  route,
  buttonText,
}) => {
  const router = useRouter();
  return (
    <Center>
      <Feather name={iconName} size={64} color={iconColor} />
      <Text
        fontFamily="Poppins-Regular"
        color={iconColor}
        textAlign="left"
        fontSize="2xl"
        my={2}
      >
        {title}
      </Text>
      <Text textAlign="center" fontFamily="Poppins-Regular">
        {message}
      </Text>
      <Button
        marginTop={6}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        onPress={() => router.push(route)}
      >
        {buttonText}
      </Button>
    </Center>
  );
};

export default VerifyNIN;
