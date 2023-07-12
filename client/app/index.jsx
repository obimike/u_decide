import { useFonts } from "expo-font";
import { Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import Colors from "../utils/color";
import { useRouter } from "expo-router";
import { save, getValueFor } from "../utils/helpers";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const router = useRouter();

  useEffect(() => {
    // save("openedBefore",  true)

    const getValue = async () => {
      // await save("openedBefore", true);

      console.log(value);
    };

    setTimeout(async () => {
      const value = await getValueFor("openedBefore");
      if (value === null) {
        await save("openedBefore", "true");
        router.replace("/intro/onboarding");
      } else {
        router.replace("/auth/");
      }
    }, 1000);
  }, []);

  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.logoName}>U-Decide</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoName: {
    fontSize: 36,
    fontFamily: "Poppins-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 48,
    color: Colors.white,
  },
});
