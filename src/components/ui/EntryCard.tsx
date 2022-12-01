import { useStoreDispatch } from "../../hooks/storeHook";
import { entryRemove } from "../../stores/entry";
import { Entry } from "../../types/entry";

function EntryCard(props: { entry: Entry }) {
    const dispatch = useStoreDispatch();

    return (
        <div className="p-4 rounded-md dark:bg-blue-gray-900 w-60">
            <h4 className="text-xl float-left">{props.entry.title}</h4>
            <i
                className="bi-trash float-right"
                onClick={() => dispatch(entryRemove(props.entry.id))}
            ></i>
            <div className="clear-both"></div>
            <p>{props.entry.description}</p>
        </div>
    );
}

export default EntryCard;
