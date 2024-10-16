import React from "react";

export const NoteContext = React.createContext({
  notes: [] as Note[],
  addNoteByContent: (noteContent: string) => {},
});
