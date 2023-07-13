import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import color from "../utils/color";
import { UserProvider } from "../utils/authProvider";

export default function AppLayout() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: color.statusBar,
          }}
        />
      </UserProvider>
    </NativeBaseProvider>
  );
}
