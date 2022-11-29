import { Entry } from "../../types/entry";

function EntryCard(props: { entry: Entry }) {
    return (
        <div className="p-4 rounded-md dark:bg-blue-gray-900 w-60">
            <h4 className="text-xl">{props.entry.title}</h4>
            <p>{props.entry.description}</p>
        </div>
    );
}

export default EntryCard;
