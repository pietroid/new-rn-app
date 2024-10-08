import React from "react";

export const NoteContext = React.createContext({
  notes: [] as Note[],
  addNote: (note: Note) => {},
});
