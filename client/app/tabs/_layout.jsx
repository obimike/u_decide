import { NativeBaseProvider } from "native-base";
import color from "../../utils/color";
import { Tabs, Stack } from "expo-router/tabs";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { UserProvider } from "../../utils/authProvider";

export default function AppLayout() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: color.statusBar,
            tabBarAllowFontScaling: true,
          }}
        >
          <Tabs.Screen
            // Name of the route to hide.
            name="index"
            options={{
              href: "/tabs",
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.secondaryTextColor,
              tabBarLabelStyle: styles.tabText,
              title: "Home",
              tabBarIcon: ({ color }) => (
                <Feather name="home" size={24} color={color} />
              ),
              tabBarStyle: styles.tabStyle,
            }}
          />
          <Tabs.Screen
            name="vote"
            options={{
              href: "tabs/vote",
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.secondaryTextColor,
              tabBarLabelStyle: styles.tabText,
              title: "Vote",
              tabBarIcon: ({ color }) => (
                <Feather name="archive" size={24} color={color} />
              ),
              tabBarStyle: styles.tabStyle,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="settings"
            options={{
              href: "tabs/settings",
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.secondaryTextColor,
              tabBarLabelStyle: styles.tabText,
              title: "Settings",
              tabBarIcon: ({ color }) => (
                <Feather name="settings" size={24} color={color} />
              ),
              tabBarStyle: styles.tabStyle,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="components/newsCard"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="components/candidateCards"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="components/categoryCard"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/terms"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/profile"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/change_pin"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/news_details"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/candidate_details"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/change_password"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="components/voteCard"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/vote_category"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/confirm_vote"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="pages/live_results"
            options={{
              href: null,
              tabBarStyle: { display: "none" },
            }}
          />
          <Tabs.Screen
            // Name of the route to hide.
            name="components/resultCard"
            options={{
              href: null,
            }}
          />
        </Tabs>
      </UserProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  tabStyle: {
    paddingBottom: 6,
    paddingTop: 8,
    height: 64,
  },
});
