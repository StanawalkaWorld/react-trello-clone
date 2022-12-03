import { TagsState } from "../stores/tags";
import { useStoreSelector } from "./storeHook";

export const useTagsFromIDs = (ids?: string[]) => {
    const tags = useStoreSelector((state: { tags: TagsState }) =>
        state.tags.tagList.filter((tag) => ids?.includes(tag.id))
    );

    return tags;
};
