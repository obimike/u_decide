import { Text, Button, Center } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import color from "../../utils/color";

const DialogResponse = ({
  iconName,
  iconColor,
  title,
  message,
  buttonText,
  onClick,
}) => {
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
        backgroundColor={iconColor}
        size="lg"
        width="100%"
        textAlign="center"
        _text={{ fontFamily: "Poppins-Regular" }}
        onPress={onClick}
      >
        {buttonText}
      </Button>
    </Center>
  );
};

export default DialogResponse;
