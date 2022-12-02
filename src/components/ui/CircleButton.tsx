import React, { ReactElement } from "react";
import { BehaviorColor } from "../../types/colors";

import "../../assets/css/components.css";

function CircleButton(props: {
    children?: ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: BehaviorColor;
    big?: boolean;
}) {
    let variant = props.variant ?? BehaviorColor.INFO;

    return (
        <button
            className={`rounded-full border-2 border-${variant} hover:bg-${variant} flex justify-center items-center ${
                props.big ? "circle-btn-big" : "circle-btn"
            }`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default CircleButton;
