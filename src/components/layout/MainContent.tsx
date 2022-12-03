import { useCategories } from "../../hooks/categories";
import { useStoreSelector } from "../../hooks/storeHook";
import CardHolder from "../ui/CardHolder";

function MainContent() {
    const entries = useStoreSelector((state) => state.entries.entryList);
    const categories: string[] = useCategories(entries);

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
