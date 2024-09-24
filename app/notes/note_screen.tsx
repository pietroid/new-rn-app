import * as React from "react";
import { View, Text, Button } from "react-native";

function NoteScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Notas</Text>
      <Button
        title="Adicionar nota"
        onPress={() => {
          navigation.navigate("AddNote");
        }}
      />
    </View>
  );
}

export default NoteScreen;
