import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { DraftTag, Tag } from "../types/entry";

export interface TagsState {
    tagList: Tag[];
}

const initialState: TagsState = {
    tagList: [
        {
            id: "1",
            name: "Test tag",
            color: "#C05",
        },
    ],
};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag(state, action: PayloadAction<DraftTag>) {
            state.tagList.push({ ...action.payload, id: uuid() });
        },
        removeTag(state, action: PayloadAction<string>) {
            state.tagList = state.tagList.filter(
                (tag) => tag.id === action.payload
            );
        },
    },
});

export const { addTag, removeTag } = tagsSlice.actions;
export default tagsSlice.reducer;
