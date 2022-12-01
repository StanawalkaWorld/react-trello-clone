import Logo from "../../assets/img/small-logo.webp";

function MainHeader() {
    return (
        <header className="p-4 bg-to-blue-500 dark:bg-blue-gray-800">
            <div className="flex items-center gap-4">
                <img src={Logo} alt="Company logo" width={64} height={64} />
                <h1 className="text-5xl font-bold">Trello</h1>
            </div>
        </header>
    );
}

export default MainHeader;
