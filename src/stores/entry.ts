import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { DraftEntry, Entry } from "../types/entry";

interface EntryState {
    entryList: Entry[];
}

const initialState: EntryState = {
    entryList: [],
};

const todosSlice = createSlice({
    name: "entries",
    initialState,
    reducers: {
        entryAdded(state, action: PayloadAction<DraftEntry>) {
            state.entryList.push({
                ...action.payload,
                id: uuid(),
                created_at: Date.now(),
                modified_at: Date.now(),
            });
        },
        entryRemove(state, action: PayloadAction<string>) {
            state.entryList = state.entryList.filter(
                (entry) => entry.id != action.payload
            );
        },
        tagRemove(state, action: PayloadAction<string>) {
            state.entryList = state.entryList.filter(
                (entry) => entry.tag != action.payload
            );
        },
        entryClear(state) {
            state.entryList = [];
        },
        entryModify(
            state,
            action: PayloadAction<{ changes: DraftEntry; id: string }>
        ) {
            state.entryList = state.entryList.map((entry) =>
                entry.id !== action.payload.id
                    ? entry
                    : {
                          ...entry,
                          ...action.payload.changes,
                          modified_at: Date.now(),
                      }
            );
        },
    },
});

export const { entryAdded, entryRemove, entryModify, tagRemove, entryClear } =
    todosSlice.actions;
export default todosSlice.reducer;
