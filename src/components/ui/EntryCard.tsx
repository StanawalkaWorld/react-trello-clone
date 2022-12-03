import { useStoreDispatch, useStoreSelector } from "../../hooks/storeHook";
import { entryRemove } from "../../stores/entry";
import { Entry } from "../../types/entry";
import { BehaviorColor } from "../../types/colors";
import CircleButton from "./CircleButton";
import { useTagsFromIDs } from "../../hooks/tagList";

function EntryCard(props: { entry: Entry }) {
    const dispatch = useStoreDispatch();
    const tags = useTagsFromIDs(props.entry.tags);

    const remove = () => dispatch(entryRemove(props.entry.id));

    return (
        <div className="p-4 rounded-md dark:bg-blue-gray-900 w-full flex gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <CircleButton variant={BehaviorColor.ERROR} onClick={remove}>
                    <i className="bi-dash-lg"></i>
                </CircleButton>
                <CircleButton onClick={remove}>
                    <i className="bi-pencil-square"></i>
                </CircleButton>
            </div>
            <div>
                <div className="flex flex-wrap gap-4">
                    {tags.map((tag) => (
                        <div
                            className="rounded-md p-1 text-xs"
                            style={{ backgroundColor: tag.color }}
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <div>
                        <h4 className="text-xl">{props.entry.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntryCard;
