import { useMemo } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/storeHook";

import type { Entry } from "../../types/entry";
import CardHolder from "../ui/CardHolder";

function getAllCategories(entries: Entry[]): string[] {
    console.log("PERFORMANCE CHECK 🔥🔥🔥🔥🔥🔥🔥");
    const tag_table: string[] = entries.map((entry) => entry.category);

    return tag_table.filter((tag, index) => index === tag_table.indexOf(tag));
}

function MainContent() {
    const entries = useStoreSelector((state) => state.entries.entryList);

    const categories: string[] = useMemo(
        () => getAllCategories(entries),
        [entries]
    );
    return (
        <main className="flex p-4 overflow-x-auto gap-4">
            {categories.map((category) => (
                <div>
                    <CardHolder
                        key={category}
                        category={category}
                        entries={entries.filter(
                            (entry) => entry.category === category
                        )}
                    />
                </div>
            ))}
        </main>
    );
}

export default MainContent;
