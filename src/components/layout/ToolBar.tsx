import { useStoreDispatch } from "../../hooks/storeHook";
import { entryAdded, entryClear } from "../../stores/entry";
import { BehaviorColor } from "../../types/colors";
import MButton from "../ui/MButton";

function ToolBar() {
    const dispatch = useStoreDispatch();

    const test_entry = () => {
        dispatch(
            entryAdded({
                title: "Test entry",
                description: "nice",
                tag: "🔥🔥🔥",
            })
        );
    };

    return (
        <div className="p-4 bg-blue-gray-700 children:mr-4">
            <MButton onClick={test_entry} variant={BehaviorColor.SUCCESS}>
                <span>
                    <i className="bi-plus-lg mr-2 text-lg"></i>
                    Add a card
                </span>
            </MButton>
            <MButton
                onClick={() => dispatch(entryClear())}
                variant={BehaviorColor.ERROR}
            >
                <span>
                    <i className="bi-trash mr-2 text-lg"></i>
                    Remove all cards
                </span>
            </MButton>
            <dialog></dialog>
        </div>
    );
}

export default ToolBar;
