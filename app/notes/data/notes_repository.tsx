import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTE_KEY = "NOTE";

class NotesRepository {
  fetchNotes = async (request: PaginatedRequest): Promise<Note[]> => {
    let lastNoteId = await AsyncStorage.getItem("lastNoteId");
    if (!lastNoteId) {
      return [];
    }

    let requestedLastNoteId = request.firstNoteId + request.pageSize;
    if (requestedLastNoteId > parseInt(lastNoteId)) {
      requestedLastNoteId = parseInt(lastNoteId);
    }

    let values = (
      await AsyncStorage.multiGet([
        ...Array.from(
          { length: requestedLastNoteId - request.firstNoteId + 1 },
          (_, i) => `${NOTE_KEY}_${(request.firstNoteId + i).toString()}`
        ),
      ])
    ).map(([, value]) => JSON.parse(value ?? ""));

    return values;
  };

  addNote = async (note: Note): Promise<void> => {
    let lastNoteId = await AsyncStorage.getItem("lastNoteId");
    let newNoteId = lastNoteId ? parseInt(lastNoteId) + 1 : 1;

    await AsyncStorage.setItem(
      `${NOTE_KEY}_${newNoteId.toString()}`,
      JSON.stringify(note)
    );
    await AsyncStorage.setItem("lastNoteId", newNoteId.toString());
  };

  editNote = async (note: Note): Promise<void> => {
    await AsyncStorage.setItem(`${NOTE_KEY}_${note.id}`, JSON.stringify(note));
  };
}

interface PaginatedRequest {
  firstNoteId: number;
  pageSize: number;
}

export default NotesRepository;
