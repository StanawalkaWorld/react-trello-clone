import { useState } from "react";
import { BehaviorColor } from "../../types/colors";
import CircleButton from "./CircleButton";

export interface SelectOption<T> {
    label: string;
    value: T;
    color?: string;
}

function MultiSelect<T>(props: { datalist: SelectOption<T>[] }) {
    const [selected, setSelected] = useState<SelectOption<T>[]>([]);

    return (
        <>
            <div className="input relative flex items-center">
                {/* Selected tags list */}
                <div className="flex flex-wrap flex-grow gap-4">
                    {selected.map((data) => (
                        <div
                            className="px-2 py-1 rounded-md"
                            style={{
                                backgroundColor: data.color ?? "#0f0f0f",
                            }}
                        >
                            {data.label}
                        </div>
                    ))}
                </div>
                {/* Options (Clear selection and show list) */}
                <div className="flex gap-4">
                    <CircleButton variant={BehaviorColor.ERROR}>
                        <i className="bi-x-lg"></i>
                    </CircleButton>
                    <CircleButton variant={BehaviorColor.SECONDARY}>
                        <i className="bi-caret-down"></i>
                    </CircleButton>
                </div>
                {/* Tag list */}
                <div className="mulselect-taglist flex flex-wrap gap-2 bg-blue-gray-900 rounded-md p-3">
                    {props.datalist.map((data) => (
                        <div
                            className="px-2 py-1 rounded-md"
                            style={{
                                backgroundColor: data.color ?? "#0f0f0f",
                            }}
                        >
                            {data.label}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MultiSelect;
