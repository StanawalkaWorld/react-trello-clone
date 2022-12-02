import { useStoreDispatch } from "../../hooks/storeHook";
import { entryRemove } from "../../stores/entry";
import { Entry } from "../../types/entry";
import { BehaviorColor } from "../../types/colors";
import CircleButton from "./CircleButton";

function EntryCard(props: { entry: Entry }) {
    const dispatch = useStoreDispatch();

    return (
        <div className="p-4 rounded-md dark:bg-blue-gray-900 w-60">
            <h4 className="text-xl float-left">{props.entry.title}</h4>
            <div className="float-right">
                <CircleButton
                    variant={BehaviorColor.ERROR}
                    onClick={() => dispatch(entryRemove(props.entry.id))}
                >
                    <i className="bi-trash"></i>
                </CircleButton>
            </div>

            <div className="clear-both"></div>
            <p>{props.entry.description}</p>
        </div>
    );
}

export default EntryCard;
