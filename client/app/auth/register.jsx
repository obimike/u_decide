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
import { Link, useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

import { statesOption } from "./utils/state";
import { toggleLGA } from "./utils/lga";

const Register = () => {
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [state, setState] = useState("");
  const [lgaList, setLgaList] = useState([]);
  const [lga, setLga] = useState("");

  const router = useRouter();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPicker(false);
    setDate(currentDate);
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
                <DateTimePicker mode={mode} value={date} onChange={onChange} />
              )}
              <Pressable onPress={showDatepicker}>
                <Input
                  size="xl"
                  editable={false}
                  placeholder="Select Date of birth"
                  borderColor={color.primary}
                  value={date.toDateString()}
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
            onPress={() => router.push("/auth/biometrics")}
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
