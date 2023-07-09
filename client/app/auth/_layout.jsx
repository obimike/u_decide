import { Stack } from "expo-router";
import color from "../../utils/color";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarHidden: false,
        statusBarColor: color.statusBar,
      }}
    >
      <Stack.Screen name="verify_nin" />
      <Stack.Screen name="register" />
      <Stack.Screen name="biometrics" />
      <Stack.Screen name="face_id" />
      <Stack.Screen name="pin" />
    </Stack>
  );
}
