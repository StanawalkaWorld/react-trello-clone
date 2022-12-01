import { useStoreDispatch } from "../../hooks/storeHook";
import { tagRemove } from "../../stores/entry";
import { Entry } from "../../types/entry";
import EntryCard from "./EntryCard";
import MButton from "./MButton";

function CardHolder(props: { tag: string; entries: Entry[] }) {
    const dispatch = useStoreDispatch();

    return (
        <div className="p-2 rounded-md dark:bg-blue-gray-800 flex flex-col gap-2">
            <h3 className="text-2xl float-left w-1/2">{props.tag}</h3>
            <div className="float-right w-1/2">
                <MButton onClick={() => dispatch(tagRemove(props.tag))}>
                    <span>
                        <i className="bi-trash"></i>
                        Delete
                    </span>
                </MButton>
            </div>
            <div className="clear-both"></div>
            {props.entries.map((entry) => (
                <EntryCard entry={entry} key={entry.id} />
            ))}
        </div>
    );
}

export default CardHolder;
