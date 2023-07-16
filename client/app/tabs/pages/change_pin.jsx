import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from "native-base";
import { useState } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";

import { db, doc, getDoc, updateDoc } from "../../../firebase";
import { useAuth } from "../../../utils/authProvider";

const ChangePin = () => {
  const [currentPin, setCurrentPin] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();
  const router = useRouter();

  const handleChange = async () => {
    try {
      setErrorMsg(null);
      setSuccessMsg(null);
      const isFieldsEmpty =
        currentPin !== "" && pin !== "" && confirmPin !== "";
      const isPinMatch = pin === confirmPin;
      if (!isFieldsEmpty) {
        setErrorMsg("All fields are required!");
      } else {
        if (isPinMatch) {
          setLoading(true);
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            if (docSnap.data().pin === currentPin) {
              await updateDoc(doc(db, "users", currentUser.uid), { pin });
              setSuccessMsg(
                "Pin change was suceessful,\n Your new pin will be used to confirm your vote"
              );
              setConfirmPin("");
              setCurrentPin("");
              setPin("");
              setLoading(false);
            } else {
              setErrorMsg("Your current PIN is wrong!");
              setLoading(false);
            }
          } else {
            console.log("No such user!");
            setLoading(false);
          }
        } else {
          setErrorMsg("Your PIN do not match!");
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box backgroundColor={color.white} padding={4}>
        <Pressable onPress={() => router.push("/tabs/settings")}>
          <HStack>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={color.textColor}
            />
            <Text
              color={color.textColor}
              fontSize={18}
              fontFamily="Poppins-Regular"
              alignSelf="center"
            >
              Back
            </Text>
          </HStack>
        </Pressable>
        <Text
          color={color.textColor}
          fontSize={20}
          fontFamily="Poppins-Regular"
          mt={4}
        >
          Change PIN
        </Text>
      </Box>
      {/* Setting feedback messages */}
      {errorMsg && (
        <Text
          m={4}
          color={color.error}
          fontSize="18px"
          sx={{
            textAlign: "center",
          }}
        >
          {errorMsg}
        </Text>
      )}
      {successMsg && (
        <Text
          fontFamily="Poppins-Regular"
          my={4}
          color={color.primary}
          fontSize="lg"
          textAlign="center"
        >
          {successMsg}
        </Text>
      )}

      <Box p={4}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <VStack space={4}>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Enter current PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={currentPin}
                  onTextChange={(password) => setCurrentPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Enter New PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={pin}
                  onTextChange={(password) => setPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
                />
              </Box>
              <Box>
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.textColor}
                  textAlign="left"
                  fontSize="lg"
                >
                  Confirm New PIN
                </Text>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //   cellSize={42}
                  codeLength={4}
                  cellSpacing={16}
                  value={confirmPin}
                  onTextChange={(password) => setConfirmPin(password)}
                  cellStyle={{
                    borderWidth: 2,
                    borderColor: color.primary,
                    borderRadius: 8,
                  }}
                  cellStyleFocused={{
                    borderColor: color.textColor,
                  }}
                />
              </Box>
              <Center>
                <Button
                  marginTop={6}
                  backgroundColor={color.primary}
                  size="lg"
                  width="85%"
                  textAlign="center"
                  _text={{ fontFamily: "Poppins-Regular" }}
                  isLoadingText="Changing Vote PIN..."
                  isLoading={loading}
                  onPress={handleChange}
                >
                  <Text
                    fontFamily="Poppins-Regular"
                    color={color.white}
                    textAlign="left"
                    fontSize="md"
                  >
                    Change PIN
                  </Text>
                </Button>
              </Center>
            </VStack>
          </KeyboardAvoidingView>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ChangePin;
