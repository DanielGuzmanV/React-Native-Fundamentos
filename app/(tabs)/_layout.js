import { Tabs } from "expo-router";

import { HomeIcon, InfoIcon, BasicIcon } from "../../components/Icons";

export default function TabsLayout() {
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: "#000"},
        tabBarActiveTintColor: "cyan"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <HomeIcon color={color}/>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({color}) => <InfoIcon color={color}/>,
        }}
      />
      <Tabs.Screen
        name="basic"
        options={{
          title: "Basicos",
          tabBarIcon: ({color}) => <BasicIcon color={color}/>,
        }}
      />
    </Tabs>
  )
}
