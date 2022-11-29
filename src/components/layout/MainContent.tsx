import React, { useMemo } from "react";
import { EntryAction, ReducerArgs } from "../../hooks/entries";
import type { Entry } from "../../types/entry";
import CardHolder from "../ui/CardHolder";

function getAllTags(entries: Entry[]): string[] {
    console.log("PERFORMANCE CHECK 🔥🔥🔥🔥🔥🔥🔥");
    const tag_table: string[] = entries.map((entry) => entry.tag);

    return tag_table.filter((tag, index) => index === tag_table.indexOf(tag));
}

function MainContent(props: {
    entries: Entry[];
    entryController: React.Dispatch<ReducerArgs>;
}) {
    const tags: string[] = useMemo(
        () => getAllTags(props.entries),
        [props.entries]
    );

    const test_entry = () => {
        props.entryController({
            type: EntryAction.ADD,
            payload: {
                data: {
                    title: "very much",
                    description: "nice",
                    tag: "WELCOME",
                },
            },
        });
    };

    return (
        <main className="flex flex-wrap gap-4 py-6 overflow-x-auto">
            <button onClick={test_entry}>kekw</button>
            {tags.map((tag) => (
                <CardHolder
                    key={tag}
                    tag={tag}
                    entries={props.entries.filter((entry) => entry.tag === tag)}
                />
            ))}
        </main>
    );
}

export default MainContent;
