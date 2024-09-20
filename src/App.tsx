import "./App.css";

import { Search } from "./components/search/Search";
import { Header } from "./layout/Header";

import useDarkMode from "./hook/useDarkMode";

function App() {
    const { handleDarkMode, isDarkMode } = useDarkMode();

    return (
        <div className="App">
            <Header handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
            <Search isDarkMode={isDarkMode} />
        </div>
    );
}

export default App;
