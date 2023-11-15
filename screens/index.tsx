import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { RootStackParamList } from "../types/navigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
