import { useState } from "react";

export interface SelectOption<T> {
    label: string;
    value: T;
    color?: string;
}

function MultiSelect<T>(props: { datalist: SelectOption<T>[] }) {
    const [selected, setSelected] = useState<SelectOption<T>[]>([]);

    return (
        <>
            <div className="input">
                {/* Selected tags list */}
                <div className="flex flex-wrap gap-4">
                    {selected.map((data) => (
                        <div
                            className="px-2 py-1 rounded-md"
                            style={{ backgroundColor: data.color ?? "#0f0f0f" }}
                        >
                            {data.label}
                        </div>
                    ))}
                </div>
                {/* Options (Clear selection and show list) */}
                <div></div>
            </div>
        </>
    );
}

export default MultiSelect;
