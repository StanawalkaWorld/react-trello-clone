import { useRef } from "react";
import { useCategories } from "../../hooks/categories";
import { useStoreDispatch, useStoreSelector } from "../../hooks/storeHook";
import { addEntry, entryClear } from "../../stores/entry";
import { BehaviorColor } from "../../types/colors";
import MButton from "../ui/MButton";

function ToolBar() {
    const dispatch = useStoreDispatch();
    const entries = useStoreSelector((state) => state.entries.entryList);
    const categories = useCategories(entries);

    const createDialog = useRef<HTMLDialogElement>(null);

    // New Card form refs
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);

    const createEntry = () => {
        dispatch(
            addEntry({
                title: titleRef.current?.value,
                description: descriptionRef.current?.value,
                category: categoryRef.current?.value,
            })
        );
    };

    return (
        <>
            <div className="p-4 bg-blue-gray-700 children:mr-4">
                <MButton
                    onClick={() => createDialog.current?.showModal()}
                    variant={BehaviorColor.SUCCESS}
                >
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
            </div>
            <dialog
                ref={createDialog}
                className="bg-blue-gray-800 text-white w-1/2"
            >
                <form
                    method="dialog"
                    onSubmit={createEntry}
                    className="flex flex-col gap-4"
                >
                    <h4 className="text-4xl font-bold">Add a new card.</h4>
                    {/* Title textbox */}
                    <input className="input" type="text" ref={titleRef} />
                    {/* Description textarea */}
                    <textarea className="input" ref={descriptionRef}></textarea>
                    {/* Category datalist (https://www.tutorialrepublic.com/html-reference/html5-datalist-tag.php) */}
                    <input
                        className="input"
                        list="category-list"
                        ref={categoryRef}
                    />
                    <datalist id="category-list">
                        {categories.map((category) => (
                            <option value={category} key={category}>
                                {category}
                            </option>
                        ))}
                    </datalist>
                    {/* Some kind of tags multi-select and creation */}

                    <div className="flex justify-center">
                        <MButton
                            variant={BehaviorColor.ERROR}
                            onClick={() => createDialog.current?.close()}
                        >
                            <>Cancel</>
                        </MButton>
                        <MButton variant={BehaviorColor.SUCCESS}>
                            <>Create!</>
                        </MButton>
                    </div>
                </form>
            </dialog>
        </>
    );
}

export default ToolBar;
