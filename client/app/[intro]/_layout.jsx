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
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
    </Stack>
  );
}
