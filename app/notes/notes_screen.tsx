import * as React from "react";
import { View, Text, Button } from "react-native";

function NotesScreen({ navigation }: any) {
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

export default NotesScreen;
