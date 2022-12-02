import { useStoreDispatch } from "../../hooks/storeHook";
import { tagRemove } from "../../stores/entry";
import { BehaviorColor } from "../../types/colors";
import { Entry } from "../../types/entry";
import CircleButton from "./CircleButton";
import EntryCard from "./EntryCard";
import MButton from "./MButton";

function CardHolder(props: { tag: string; entries: Entry[] }) {
    const dispatch = useStoreDispatch();

    return (
        <div className="p-2 rounded-md dark:bg-blue-gray-800 flex flex-col gap-2">
            <div>
                <h3 className="text-2xl float-left">{props.tag}</h3>
                <div className="float-right">
                    <CircleButton
                        variant={BehaviorColor.ERROR}
                        onClick={() => dispatch(tagRemove(props.tag))}
                        big
                    >
                        <span>
                            <i className="bi-trash"></i>
                        </span>
                    </CircleButton>
                </div>
            </div>
            <div className="clear-both"></div>
            {props.entries.map((entry) => (
                <EntryCard entry={entry} key={entry.id} />
            ))}
        </div>
    );
}

export default CardHolder;
