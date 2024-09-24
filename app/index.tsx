import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NoteScreen from "./notes/note_screen";
import CalendarScreen from "./calendar/calendar_screen";
import AddNoteScreen from "./notes/add_note_screen";
import AddEventScreen from "./calendar/add_event_screen";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Notas" component={NoteScreen} />
      <Tab.Screen name="Calendário" component={CalendarScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="main" component={TabNavigator} />
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="AddNote" component={AddNoteScreen} />
          <RootStack.Screen name="AddEvent" component={AddEventScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
