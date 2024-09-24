import * as React from "react";
import { View, Text, Button } from "react-native";

function CalendarScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Calendário</Text>
      <Button
        title="Adicionar evento"
        onPress={() => {
          navigation.navigate("AddEvent");
        }}
      />
    </View>
  );
}

export default CalendarScreen;
