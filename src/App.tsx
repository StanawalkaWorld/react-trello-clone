import MainHeader from "./components/layout/MainHeader";
import MainContent from "./components/layout/MainContent";
import { useEntries } from "./hooks/entries";
import ToolBar from "./components/layout/ToolBar";

function App() {
    const [entries, dispatchEntries] = useEntries();

    return (
        <>
            <MainHeader />
            <ToolBar />
            <MainContent entries={entries} entryController={dispatchEntries} />
            <footer></footer>
        </>
    );
}

export default App;

