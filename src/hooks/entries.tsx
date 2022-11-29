import { v4 as uuid } from "uuid";
import { useReducer } from "react";

import { Maybe, maybe_or } from "../types/monad";
import { Entry, DraftEntry } from "../types/entry";

export enum EntryAction {
    ADD,
    REMOVE,
    MODIFY,
    MOVE,
}
export interface ReducerArgs {
    type: EntryAction;
    payload: {
        id: Maybe<string>;
        data: Maybe<DraftEntry>;
        target: Maybe<string>;
    };
}

function entriesReducer(prev: Entry[], action: ReducerArgs): Entry[] {
    switch (action.type) {
        case EntryAction.ADD:
            const add_entry = (entry: DraftEntry): Entry[] => [
                ...prev,
                {
                    ...entry,
                    id: uuid(),
                    created_at: new Date(),
                    modified_at: new Date(),
                },
            ];
            return maybe_or(action.payload.data, add_entry, prev);
        case EntryAction.REMOVE:
            const remove_entry = (id: string): Entry[] =>
                prev.filter((entry) => entry.id !== id);
            return maybe_or<string, Entry[]>(
                action.payload.id,
                remove_entry,
                prev
            );
        case EntryAction.MODIFY:
            const modify_entry = (id: string): Entry[] =>
                prev.map((entry) =>
                    entry.id !== id
                        ? entry
                        : {
                              ...entry,
                              ...action.payload.data,
                              modified_at: new Date(),
                          }
                );
            return maybe_or(action.payload.id, modify_entry, prev);
        case EntryAction.MOVE:
        default:
            return prev;
    }
}

export const useEntries = () => {
    return useReducer(entriesReducer, []);
};
