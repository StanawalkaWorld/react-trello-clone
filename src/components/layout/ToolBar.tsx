import MButton from "../ui/MButton";

function ToolBar() {
    return (
        <div className="p-4 bg-blue-gray-700">
            <MButton>
                <span>
                    <i className="bi-plus-lg mr-2"></i>
                    Add a card
                </span>
            </MButton>
        </div>
    );
}

export default ToolBar;
