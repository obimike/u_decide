import {
  Box,
  Text,
  Button,
  HStack,
  Center,
  Pressable,
  Icon,
} from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect, useRef } from "react";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { Image } from "expo-image";

import {
  storage,
  uploadBytes,
  getDownloadURL,
  ref,
  db,
  doc,
  updateDoc,
} from "../../firebase";
import { getValueFor } from "../../utils/helpers";

const FaceID = () => {
  const [hasPermission, setHasPermission] = useState();
  const [faceData, setFaceData] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const router = useRouter();

  const handleFacesDetected = ({ faces }) => {
    setFaceData(faces);
  };

  const takePicture = async () => {
    console.log(previewVisible);
    if (cameraRef) {
      if (previewVisible) {
        setPreviewVisible(false);
        setFaceData([]);
        setCapturedImage(null);
      } else {
        try {
          const data = await cameraRef.current.takePictureAsync();
          console.log(data);
          setCapturedImage(data.uri);
          setPreviewVisible(true);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  handleImageUpload = async () => {
    setLoading(true);
    try {
      const uid = await getValueFor("UserID");
      const storageRef = ref(storage, "profile/" + uid);

      let response = await fetch(capturedImage);
      let data = await response.blob();
      const metadata = {
        contentType: "image/jpeg",
      };

      uploadBytes(storageRef, data, metadata).then(
        (snapshot) => {
          getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "users", uid), { imageUrl: downloadURL });
            console.log("Download link to your message: ", downloadURL);
            setLoading(false);
            router.replace("/tabs");
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error.message);
      setLoading(false);
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
          {previewVisible ? (
            <Image
              width={240}
              height={240}
              style={{ marginRight: 8, borderRadius: 8 }}
              source={capturedImage}
              alt="image"
            />
          ) : (
            <Camera
              ref={cameraRef}
              type={Camera.Constants.Type.front}
              style={{ height: 240 }}
              // other props
              onFacesDetected={handleFacesDetected}
              faceDetectorSettings={{
                mode: FaceDetector.FaceDetectorMode.accurate,
                detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                runClassifications:
                  FaceDetector.FaceDetectorClassifications.none,
                minDetectionInterval: 100,
                tracking: true,
              }}
            />
          )}
        </Box>
        <Text mt={8}>
          {faceData.length === 0 ? "Scanning..." : "Face detected"}
        </Text>
        {faceData.length > 0 && (
          <Button
            marginTop={4}
            backgroundColor={color.primary}
            size="lg"
            width="30%"
            textAlign="center"
            _text={{ fontFamily: "Poppins-Regular" }}
            onPress={takePicture}
            isDisabled={loading}
          >
            {previewVisible ? "Reset" : "Take Shot"}
          </Button>
        )}
      </Center>
      <Center>
        {previewVisible && (
          <Button
            marginTop={16}
            backgroundColor={color.primary}
            size="lg"
            width="80%"
            textAlign="center"
            _text={{ fontFamily: "Poppins-Regular" }}
            onPress={handleImageUpload}
            isLoadingText="Uploading image..."
            isLoading={loading}
          >
            Complete Registration
          </Button>
        )}
      </Center>
    </Box>
  );
};

export default FaceID;
