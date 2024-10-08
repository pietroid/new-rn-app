import * as React from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NoteContext } from "../note_context";

function NotesScreen({ navigation }: any) {
  const { notes } = React.useContext(NoteContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={notes}
        renderItem={({ item }) => <Text>{item.content}</Text>}
      />
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
