import { Entry } from "../../types/entry";
import EntryCard from "./EntryCard";

function CardHolder(props: { tag: string; entries: Entry[] }) {
    return (
        <div className="p-2 rounded-md dark:bg-blue-gray-800 flex flex-col gap-2">
            <h3 className="text-2xl text-center">{props.tag}</h3>
            {props.entries.map((entry) => (
                <EntryCard entry={entry} key={entry.id} />
            ))}
        </div>
    );
}

export default CardHolder;
