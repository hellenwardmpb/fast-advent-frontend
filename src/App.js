import "./App.css";
import { useEffect } from "react";
import { getData } from "./helpers/helpers";

function App() {
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <header className="App-header"></header>
        </div>
    );
}

export default App;
