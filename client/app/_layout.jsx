import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import color from "../utils/color";

export default function AppLayout() {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarHidden: false,
          statusBarColor: color.statusBar,
        }}
      />
    </NativeBaseProvider>
  );
}
