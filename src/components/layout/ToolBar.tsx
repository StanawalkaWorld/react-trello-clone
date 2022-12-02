import { useRef } from "react";
import { useStoreDispatch } from "../../hooks/storeHook";
import { addEntry, entryClear } from "../../stores/entry";
import { BehaviorColor } from "../../types/colors";
import MButton from "../ui/MButton";

function ToolBar() {
    const dispatch = useStoreDispatch();

    const createDialog = useRef<HTMLDialogElement>(null);

    const test_entry = () => {
        dispatch(
            addEntry({
                title: "Test entry",
                description: "nice",
                category: "👨‍💻😉",
                tags: ["1"],
            })
        );
    };

    const createEntry = () => {};

    return (
        <div className="p-4 bg-blue-gray-700 children:mr-4">
            <MButton onClick={test_entry} variant={BehaviorColor.SUCCESS}>
                <>
                    <i className="bi-plus-lg mr-2 text-lg"></i>
                    Add a card
                </>
            </MButton>
            <MButton
                onClick={() => dispatch(entryClear())}
                variant={BehaviorColor.ERROR}
            >
                <>
                    <i className="bi-trash mr-2 text-lg"></i>
                    Remove all cards
                </>
            </MButton>
            <dialog ref={createDialog}>
                <form method="dialog" onSubmit={createEntry}>
                    {/* Title textbox */}
                    {/* Description textarea */}
                    {/* Category datalist (https://www.tutorialrepublic.com/html-reference/html5-datalist-tag.php) */}
                    {/* Some kind of tags multi-select and creation */}
                </form>
            </dialog>
        </div>
    );
}

export default ToolBar;
