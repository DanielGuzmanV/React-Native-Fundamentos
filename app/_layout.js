import { View, Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import { Logo } from "../components/ReactLogo";
import { CircleInfoIcon } from "../components/Icons";
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ffff" },
          headerTintColor: "black",
          headerTitle: "",

          headerLeft: () => (
            <View className="p-2 flex-row items-center">
              <Logo />
              <Text className="ml-2 font-bold text-xl text-sky-300">
                React Native
              </Text>
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/about" className="p-3">
              <StyledPressable className={"active:opacity-20"}>
                <CircleInfoIcon />
              </StyledPressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}