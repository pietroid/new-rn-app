import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTE_KEY = "NOTE";

class NotesRepository {
  fetchFirstNotes = async (pageSize: number): Promise<Note[]> => {
    let lastNoteId = parseInt(
      (await AsyncStorage.getItem("lastNoteId")) ?? "0"
    );
    if (!lastNoteId) {
      return [];
    }

    let values = (
      await AsyncStorage.multiGet([
        ...Array.from(
          { length: Math.min(pageSize, lastNoteId) },
          (_, i) => `${NOTE_KEY}_${(lastNoteId - i).toString()}`
        ),
      ])
    ).map(([, value]) => JSON.parse(value ?? "{}"));

    return values;
  };

  fetchNotes = async (request: PaginatedRequest): Promise<Note[]> => {
    let lastNoteId = parseInt(
      (await AsyncStorage.getItem("lastNoteId")) ?? "0"
    );
    if (!lastNoteId) {
      return [];
    }

    let pageSize =
      request.lastNoteId > request.pageSize
        ? request.pageSize
        : request.lastNoteId;

    let values = (
      await AsyncStorage.multiGet([
        ...Array.from(
          { length: pageSize },
          (_, i) => `${NOTE_KEY}_${(request.lastNoteId - i).toString()}`
        ),
      ])
    ).map(([, value]) => JSON.parse(value ?? "{}"));

    return values;
  };

  addNoteByContent = async (noteContent: string): Promise<Note> => {
    let lastNoteId = await AsyncStorage.getItem("lastNoteId");
    let newNoteId = lastNoteId ? parseInt(lastNoteId) + 1 : 1;
    let newNote: Note = {
      id: newNoteId.toString(),
      content: noteContent,
      modifiedAt: new Date(),
    };
    await AsyncStorage.setItem(
      `${NOTE_KEY}_${newNoteId.toString()}`,
      JSON.stringify(newNote)
    );
    await AsyncStorage.setItem("lastNoteId", newNoteId.toString());
    return newNote;
  };

  editNote = async (note: Note): Promise<void> => {
    await AsyncStorage.setItem(`${NOTE_KEY}_${note.id}`, JSON.stringify(note));
  };
}

interface PaginatedRequest {
  lastNoteId: number;
  pageSize: number;
}

export default NotesRepository;
