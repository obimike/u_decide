import {
  Box,
  Text,
  Button,
  Flex,
  Input,
  Pressable,
  Icon,
  Modal,
} from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { useState } from "react";
import DialogResponse from "./response_modal";
import { collection, getDocs, db, query, where } from "../../firebase";

const VerifyNIN = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [iconName, setIconName] = useState();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("");
  const [iconColor, setIconColor] = useState();
  const [buttonText, setButtonText] = useState("");
  const [NIN, setNIN] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSizeClick = async () => {
    if (NIN !== "") {
      setLoading(true);
      const ninRef = collection(db, "nin");
      const q = query(ninRef, where("numbers", "array-contains", NIN));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setIconName("thumbs-up");
        setIconColor(color.primary);
        setButtonText("Proceed");
        setRoute("/auth/register");
        setTitle("Verification Successful");
        setMessage(
          "Congratulations you are eligible to vote, please proceed by clicking on the button below to complete your registration.."
        );
        setModalVisible(!modalVisible);
        setLoading(false);
      } else {
        setIconName("thumbs-down");
        setIconColor(color.error);
        setButtonText("Cancel");
        setRoute("/auth/verify_nin");
        setTitle("Verification Failed");
        setMessage(
          "Sorry you not eligible to vote, please check the NIN you provided and try again."
        );
        setModalVisible(!modalVisible);
        setLoading(false);
      }
    }
  };

  const handleOnclick = () => {
    setModalVisible(!modalVisible);
    router.push({
      pathname: route,
      params: {
        nin: NIN,
      },
    });
  };

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
            value={NIN}
            onChangeText={(text) => setNIN(text)}
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
          isLoadingText="Verifying your NIN..."
          isLoading={loading}
        >
          Verify NIN
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
            <DialogResponse
              title={title}
              iconColor={iconColor}
              iconName={iconName}
              message={message}
              buttonText={buttonText}
              onClick={handleOnclick}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default VerifyNIN;
