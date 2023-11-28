import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { RootStackParamList } from "../types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import SelectCategory from "./SelectCategory";
import SelectLevel from "./SelectLevel";
import Quiz from "./Quiz";
import Result from "./Result";
import Stats from "./Stats";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectCategory"
          component={SelectCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectLevel"
          component={SelectLevel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
