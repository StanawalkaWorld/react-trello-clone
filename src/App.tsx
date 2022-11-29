import MainHeader from "./components/layout/MainHeader";
import MainContent from "./components/layout/MainContent";
import { useEntries } from "./hooks/entries";

function App() {
    const [entries, dispatchEntries] = useEntries();

    return (
        <>
            <MainHeader />
            {/* <nav></nav> */}
            <MainContent entries={entries} />
            <footer></footer>
        </>
    );
}

export default App;

