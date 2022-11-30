import React, { useMemo } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/storeHook";
import { entryAdded } from "../../stores/entry";

import type { Entry } from "../../types/entry";
import CardHolder from "../ui/CardHolder";

function getAllTags(entries: Entry[]): string[] {
    console.log("PERFORMANCE CHECK 🔥🔥🔥🔥🔥🔥🔥");
    const tag_table: string[] = entries.map((entry) => entry.tag);

    return tag_table.filter((tag, index) => index === tag_table.indexOf(tag));
}

function MainContent() {
    const entries = useStoreSelector((state) => state.entries);
    const entryDispatch = useStoreDispatch();

    const tags: string[] = useMemo(() => getAllTags(entries), [entries]);

    const test_entry = () => {
        entryDispatch(
            entryAdded({
                title: "Test entry",
                description: "nice",
                tag: "🔥🔥🔥",
            })
        );
    };

    return (
        <main className="flex flex-wrap gap-4 py-6 overflow-x-auto">
            <button onClick={test_entry}>kekw</button>
            {tags.map((tag) => (
                <CardHolder
                    key={tag}
                    tag={tag}
                    entries={entries.filter((entry) => entry.tag === tag)}
                />
            ))}
        </main>
    );
}

export default MainContent;
