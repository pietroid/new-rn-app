import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { registerRootComponent } from "expo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./notes/notes_screen";
import CalendarScreen from "./calendar/calendar_screen";
import AddNoteScreen from "./notes/add_note_screen";
import AddEventScreen from "./calendar/add_event_screen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Notas") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Calendário") {
              iconName = focused ? "calendar" : "calendar-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="Notas" component={NotesScreen} />
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
