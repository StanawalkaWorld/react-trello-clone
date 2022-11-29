import React, { ReactElement } from "react";

function MButton(props: {
    children?: ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            className="py-2 px-4 rounded-md bg-blue-gray-900"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default MButton;
