import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function AddNoteScreen({ navigation }: any) {
  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} color="black" />
        </TouchableWithoutFeedback>
        <Button
          title="Salvar"
          onPress={() => {
            // Save note
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
        />
      </View>
    </View>
  );
}

export default AddNoteScreen;
