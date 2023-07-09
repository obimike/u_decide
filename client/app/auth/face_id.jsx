import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
  Image,
} from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";

import IMAGE from "../../assets/images/pin.png";

const FaceID = () => {
  const [hasPermission, setHasPermission] = useState();
  const [faceData, setFaceData] = useState([]);
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const router = useRouter();

  const handleFacesDetected = ({ faces }) => {
    // console.log(faces.faces);
    setFaceData(faces);
  };

  const getFaceDataView = () => {
    if (faceData.length !== 0) {
      //   console.log(faceData.image);

      //   console.log(faceData.faces);
      return faceData.map((face, image, index) => {
        // console.log(face);
        const eyesShut =
          face.rightEyeOpenProbability < 0.4 &&
          face.leftEyeOpenProbability < 0.4;
        const winking =
          !eyesShut &&
          (face.rightEyeOpenProbability < 0.4 ||
            face.leftEyeOpenProbability < 0.4);
        const smiling = face.smilingProbability > 0.7;
        return (
          <Box key={index}>
            <Text>Eyes Shut: {eyesShut.toString()}</Text>
            <Text>Winking: {winking.toString()}</Text>
            <Text>Smiling: {smiling.toString()}</Text>
            <Text>Eyes Shut: {eyesShut.toString()}</Text>
          </Box>
        );
      });
    }
  };

  return (
    <Box padding={4}>
      <HStack mb={8} alignItems="center">
        <Pressable onPress={() => router.back()}>
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
          Back
        </Text>
      </HStack>

      <Text
        fontFamily="Poppins-Regular"
        color={color.primary}
        textAlign="left"
        fontSize="3xl"
      >
        Face ID
      </Text>
      <Text
        fontFamily="Poppins-Regular"
        color={color.secondaryTextColor}
        textAlign="left"
        fontSize="md"
      >
        Please look into the camera and hold still.
      </Text>
      <Center marginTop={16}>
        <Box borderRadius={240} height={240} width={240}>
          <Camera
            type={Camera.Constants.Type.front}
            style={{ height: 240 }}
            // other props
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.none,
              minDetectionInterval: 100,
              tracking: true,
            }}
          >
            {/* {getFaceDataView()} */}
          </Camera>
        </Box>
        <Text mt={8}>
          {faceData.length === 0 ? "Scanning..." : "Face detected"}
        </Text>
        <Text mt={8}> {getFaceDataView()}</Text>
      </Center>
      <Button
        marginTop={16}
        backgroundColor={color.primary}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        onPress={() => router.replace("/home")}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FaceID;
