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
  KeyboardAvoidingView,
  ScrollView,
  Select,
} from "native-base";
import color from "../../utils/color";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

import { statesOption } from "./utils/state";
import { toggleLGA } from "./utils/lga";

import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  setDoc,
  db,
  doc,
} from "../../firebase";
import { save } from "../../utils/helpers";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [state, setState] = useState("");
  const [lgaList, setLgaList] = useState([]);
  const [lga, setLga] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { nin } = useLocalSearchParams();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPicker(false);
    setDob(currentDate);
  };

  const showMode = (currentMode) => {
    setShowPicker(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const populateLGA = (state) => {
    const lga = toggleLGA(state);
    setLgaList(lga);
  };

  const registerUser = async () => {
    console.log("=============================");
    // clear message state
    setErrorMsg(null);
    const isFieldsEmpty =
      firstName !== "" &&
      lastName !== "" &&
      phone !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      gender !== "" &&
      lga !== "" &&
      state !== "";

    const isPasswordMatch = password === confirmPassword;
    if (!isFieldsEmpty) {
      setErrorMsg("All fields are required!");
    } else {
      if (isPasswordMatch) {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            save("UserID", user.uid);

            setDoc(doc(db, "users", user.uid), {
              firstName,
              lastName,
              nin,
              phone,
              email,
              gender,
              dob,
              state,
              lga,
              pin: "",
              imageUrl: "",
              voted: {
                "Presidential Election": false,
                "Governorship Election": false,
                "Senatorial Election": false,
                "House of Assembly Election": false,
              },
            }).catch((error) => {
              console.log(error);
              setLoading(false);
            });

            updateProfile(user, {
              displayName: lastName + " " + firstName,
            })
              .then(() => {
                // console.log(user);
                setLoading(false);

                setFirstName("");
                setEmail("");
                setPhone("");
                setLastName("");
                setPassword("");

                router.replace({
                  pathname: "/auth/pin",
                  params: {
                    uid: user.uid,
                  },
                });
              })
              .catch((error) => {
                setLoading(false);
                errorCode(error.code);
                console.log(error.message);
                console.log(error.code);
              });
          })
          .catch((error) => {
            setLoading(false);
            errorCode(error.code);
            console.log(error.message);
          });
      } else {
        setErrorMsg("Your password do not match!");
      }
    }
  };

  const errorCode = (code) => {
    switch (code) {
      case "auth/email-already-exists":
        setErrorMsg("Email is already in use by an existing user");
        break;
      case "auth/invalid-email":
        setErrorMsg("Email is invalid");
        break;
      case "auth/weak-password":
        setErrorMsg("Password should be at least 6 characters.");
        break;
      case "auth/email-already-in-use":
        setErrorMsg("Email is already in use.");
        break;
      default:
        setErrorMsg("An unknown error has occured.");
        break;
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
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
            Create Account
          </Text>
          {/* Setting feedback messages */}
          {errorMsg && (
            <Text
              my={2}
              color={color.error}
              fontSize="18px"
              sx={{
                textAlign: "center",
              }}
            >
              {errorMsg}
            </Text>
          )}
          <Stack mt={8} space={4}>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                First Name
              </Text>
              <Input
                size="xl"
                placeholder="Enter First Name"
                borderColor={color.primary}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Last Name
              </Text>
              <Input
                size="xl"
                placeholder="Enter Last Name"
                borderColor={color.primary}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </Box>
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
                value={nin}
                isDisabled
              />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Phone Number
              </Text>
              <Input
                size="xl"
                placeholder="Enter Phone Number"
                borderColor={color.primary}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Email Address
              </Text>
              <Input
                size="xl"
                placeholder="Enter Email Address"
                borderColor={color.primary}
                value={email}
                onChangeText={(text) => setEmail(text)}
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
                value={password}
                onChangeText={(text) => setPassword(text)}
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

            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Confirm Password
              </Text>
              <Input
                size="xl"
                borderColor={color.primary}
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Gender
              </Text>
              <Select
                size="xl"
                borderColor={color.primary}
                selectedValue={gender}
                accessibilityLabel="Choose Service"
                placeholder="Choose Gender"
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                <Select.Item label="Male" value="Male" />
                <Select.Item label="Female" value="Female" />
              </Select>
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                Date of birth
              </Text>
              {showPicker && (
                <DateTimePicker mode={mode} value={dob} onChange={onChange} />
              )}
              <Pressable onPress={showDatepicker}>
                <Input
                  size="xl"
                  editable={false}
                  placeholder="Select Date of birth"
                  borderColor={color.primary}
                  value={dob.toDateString()}
                />
              </Pressable>
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                State of origin
              </Text>
              <Select
                size="xl"
                fontFamily="Poppins-Regular"
                borderColor={color.primary}
                selectedValue={state}
                placeholder="Choose State of origin"
                onValueChange={(itemValue) => {
                  populateLGA(itemValue);
                  setState(itemValue);
                }}
              >
                {statesOption.map((item, i) => (
                  <Select.Item key={i} label={item} value={item} />
                ))}
              </Select>
            </Box>
            <Box>
              <Text
                fontFamily="Poppins-Regular"
                color={color.textColor}
                textAlign="left"
                fontSize="lg"
              >
                L.G.A
              </Text>
              <Select
                size="xl"
                fontFamily="Poppins-Regular"
                borderColor={color.primary}
                selectedValue={lga}
                placeholder="Choose L.G.A"
                onValueChange={(itemValue) => {
                  setLga(itemValue);
                }}
              >
                {lgaList.map((item, i) => (
                  <Select.Item key={i} label={item} value={item} />
                ))}
              </Select>
            </Box>
          </Stack>
          <Button
            marginTop={12}
            backgroundColor={color.primary}
            size="lg"
            width="100%"
            textAlign="center"
            _text={{ fontFamily: "Poppins-Regular" }}
            onPress={registerUser}
            isLoadingText="Creating account..."
            isLoading={loading}
          >
            Create Account
          </Button>

          <Flex mt={4} flexDir="row" justifyContent="center">
            <Text
              fontFamily="Poppins-Regular"
              color={color.textColor}
              textAlign="left"
              fontSize="lg"
            >
              Already have an account?
            </Text>
            <Link href="/auth">
              <Text
                fontFamily="Poppins-Regular"
                color={color.primary}
                textAlign="left"
                fontSize="lg"
              >
                {" "}
                Log In
              </Text>
            </Link>
          </Flex>
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;
