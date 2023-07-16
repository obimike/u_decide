import {
  Box,
  Text,
  HStack,
  Center,
  Pressable,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
} from "native-base";
import { useState } from "react";
import color from "../../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SmoothPinCodeInput from "@zfloc/react-native-smooth-pincode-input";
import { useAuth } from "../../../utils/authProvider";
import { Image } from "expo-image";
import { db, doc, getDoc, updateDoc } from "../../../firebase";
import DialogResponse from "../../auth/response_modal";

const ConfirmVote = () => {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // -----------------------------------------------------
  const [modalVisible, setModalVisible] = useState(false);
  const [iconName, setIconName] = useState();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("");
  const [iconColor, setIconColor] = useState();
  const [buttonText, setButtonText] = useState("");

  // -----------------------------------------------------
  const { passedObject, currentUser, updateUser, setUpdateUser } = useAuth();
  const router = useRouter();

  const handleVote = async () => {
    try {
      setErrorMsg(null);
      const isFieldsEmpty = pin !== "";
      if (!isFieldsEmpty) {
        setErrorMsg("Your Vote PIN is required!");
      } else {
        setLoading(true);
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const candidateRef = doc(db, "candidates", passedObject.id);
        const candidateSnap = await getDoc(candidateRef);
        if (candidateSnap.exists()) {
          const candidateData = candidateSnap.data();
          const votes =
            candidateData.vote === undefined ? 0 : candidateData.vote;
          console.log(passedObject.id);
          if (docSnap.exists()) {
            const votedCategory = "voted." + passedObject.category;
            if (docSnap.data().pin === pin) {
              const count = votes + 1;
              await updateDoc(doc(db, "candidates", passedObject.id), {
                vote: count,
              });
              await updateDoc(doc(db, "users", currentUser.uid), {
                [votedCategory]: true,
              });
              setPin("");
              console.log("Voting Suceess ");
              setUpdateUser(!updateUser);
              setIconName("check-square");
              setIconColor(color.primary);
              setButtonText("Go back to vote page");
              setRoute("/tabs/vote");
              setTitle("Thanks for voting!");
              setMessage(
                "Your vote has been submitted. \n See results @ `Live Results`."
              );
              setModalVisible(!modalVisible);
              setLoading(false);
            } else {
              setErrorMsg("Your Vote PIN is incorrect!");
              setLoading(false);
            }
          } else {
            console.log("No such user!");
            setLoading(false);
          }
        } else {
          setErrorMsg("No such Candidate!");
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleOnclick = () => {
    setModalVisible(!modalVisible);
    router.push({
      pathname: route,
    });
  };

  return (
    <>
      <Box>
        <Box backgroundColor={color.white} padding={4}>
          <Pressable onPress={() => router.push("/tabs/vote")}>
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
            Vote ({passedObject.category})
          </Text>
          <Text
            color={color.secondaryTextColor}
            fontSize={16}
            fontFamily="Poppins-Regular"
            mt={2}
          >
            Confirm your vote
          </Text>
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <Box p={4}>
              <Center my={8}>
                <Image
                  contentFit="fill"
                  width={180}
                  height={180}
                  style={{ marginRight: 8, borderRadius: 200 }}
                  source={passedObject.imageUrl}
                  alt="image"
                />
                <Text
                  color={color.textColor}
                  fontSize={20}
                  fontFamily="Poppins-Regular"
                  marginTop={2}
                >
                  {passedObject.name}
                </Text>
                <Text
                  color={color.textColor}
                  fontSize={16}
                  fontFamily="Poppins-Regular"
                >
                  {passedObject.category === "Presidential Election" &&
                    "Running mate: " + passedObject.runningMate}
                  {passedObject.category === "Governorship Election" &&
                    passedObject.state + " State"}
                  {passedObject.category === "House of Assembly Election" &&
                    passedObject.state +
                      " State - " +
                      passedObject.lga +
                      " LGA"}
                  {passedObject.category === "Senatorial Election" &&
                    passedObject.state +
                      " State - " +
                      passedObject.lga +
                      " LGA"}
                </Text>
                <Text
                  color={color.textColor}
                  fontSize={16}
                  fontFamily="Poppins-Regular"
                  mb={8}
                >
                  Party: {passedObject.party}
                </Text>
                {/* Setting feedback messages */}
                {errorMsg && (
                  <Text
                    my={4}
                    color={color.error}
                    fontSize="18px"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {errorMsg}
                  </Text>
                )}
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
                <Text
                  fontFamily="Poppins-Regular"
                  color={color.secondaryTextColor}
                  textAlign="left"
                  fontSize="lg"
                  mt={2}
                >
                  Enter your voting PIN
                </Text>

                <Button
                  marginTop={6}
                  backgroundColor={color.primary}
                  size="lg"
                  width="85%"
                  textAlign="center"
                  _text={{ fontFamily: "Poppins-Regular" }}
                  onPress={handleVote}
                  isLoadingText="Confirming  vote..."
                  isLoading={loading}
                >
                  <Text
                    fontFamily="Poppins-Regular"
                    color={color.white}
                    textAlign="left"
                    fontSize="md"
                  >
                    Confirm Vote
                  </Text>
                </Button>
              </Center>
            </Box>
          </KeyboardAvoidingView>
        </ScrollView>
      </Box>

      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        size="lg"
        closeOnOverlayClick={false}
        _backdrop={{
          bg: "black",
        }}
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

export default ConfirmVote;
