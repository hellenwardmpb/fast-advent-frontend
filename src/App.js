import "./App.css";
import { useEffect } from "react";
import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
};

const getData = async () => {
    try {
        const url = "/api/images";
        const response = await axios(url, config);
        console.log(response.data);
    } catch (err) {
        console.error(err.message);
    }
};

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
