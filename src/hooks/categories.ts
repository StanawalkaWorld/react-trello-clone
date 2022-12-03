import { useMemo } from "react";
import { Entry } from "../types/entry";

function getAllCategories(entries: Entry[]): string[] {
    //console.log("PERFORMANCE CHECK 🔥🔥🔥🔥🔥🔥🔥");
    const tag_table: string[] = entries.map((entry) => entry.category);

    return tag_table.filter((tag, index) => index === tag_table.indexOf(tag));
}

export const useCategories = (entries: Entry[]) => {
    const categories: string[] = useMemo(
        () => getAllCategories(entries),
        [entries]
    );

    return categories;
};
