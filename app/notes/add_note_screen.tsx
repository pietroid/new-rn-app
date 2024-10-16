import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import NotesRepository from "./data/notes_repository";
import { NoteContext } from "../note_context";

function AddNoteScreen({ navigation }: any) {
  const { notes, addNoteByContent } = React.useContext(NoteContext);
  const [noteContent, setNoteContent] = React.useState("");
  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Salvar"
          onPress={() => {
            addNoteByContent(noteContent);
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}
      >
        <TextInput
          placeholder="O que está passando na sua cabeça?"
          style={{
            fontSize: 15,
            marginBottom: 20,
          }}
          onChangeText={(text) => setNoteContent(text)}
        />
      </View>
    </View>
  );
}

export default AddNoteScreen;
