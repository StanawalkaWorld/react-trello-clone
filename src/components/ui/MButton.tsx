import React, { ReactElement } from "react";
import { BehaviorColor } from "../../types/colors";

function MButton(props: {
    children?: ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: BehaviorColor;
}) {
    let variant = props.variant ?? BehaviorColor.INFO;

    return (
        <button
            className={`py-2 px-4 rounded-md border-4 border-${variant} hover:bg-${variant}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default MButton;
