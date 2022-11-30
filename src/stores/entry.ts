import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { DraftEntry, Entry } from "../types/entry";

const todosSlice = createSlice({
    name: "entries",
    initialState: [] as Entry[],
    reducers: {
        entryAdded(state, action: PayloadAction<DraftEntry>) {
            state.push({
                ...action.payload,
                id: uuid(),
                created_at: Date.now(),
                modified_at: Date.now(),
            });
        },
        entryRemove(state, action: PayloadAction<string>) {
            state = state.filter((entry) => entry.id !== action.payload);
        },
        entryModify(
            state,
            action: PayloadAction<{ changes: DraftEntry; id: string }>
        ) {
            state = state.map((entry) =>
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

export const { entryAdded, entryRemove, entryModify } = todosSlice.actions;
export default todosSlice.reducer;
