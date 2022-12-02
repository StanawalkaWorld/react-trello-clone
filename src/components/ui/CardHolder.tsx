import { useStoreDispatch } from "../../hooks/storeHook";
import { categoryRemove } from "../../stores/entry";
import { BehaviorColor } from "../../types/colors";
import { Entry } from "../../types/entry";
import CircleButton from "./CircleButton";
import EntryCard from "./EntryCard";

function CardHolder(props: { category: string; entries: Entry[] }) {
    const dispatch = useStoreDispatch();

    const remove = () => dispatch(categoryRemove(props.category));

    return (
        <div className="rounded-md dark:bg-blue-gray-800 flex justify-between w-72">
            <div className="p-4 w-full">
                <div className="mb-6">
                    <h3
                        className="text-2xl overflow-ellipsis"
                        title={props.category}
                    >
                        {props.category}
                    </h3>
                </div>
                {props.entries.map((entry) => (
                    <>
                        <EntryCard entry={entry} key={entry.id} />
                        <div className="mb-2"></div>
                    </>
                ))}
            </div>
            <div className="bg-blue-gray-700 rounded-md p-2 flex flex-col gap-2">
                <CircleButton variant={BehaviorColor.ERROR} onClick={remove}>
                    <span>
                        <i className="bi-dash-lg"></i>
                    </span>
                </CircleButton>
                <CircleButton onClick={remove}>
                    <span>
                        <i className="bi-pencil-square"></i>
                    </span>
                </CircleButton>
            </div>
        </div>
    );
}

export default CardHolder;
