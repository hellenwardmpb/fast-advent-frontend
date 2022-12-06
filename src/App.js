import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [adventData, setAdventData] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const url = "/api/images";
                const config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                };

                const response = await axios(url, config);

                setAdventData(response.data);
            } catch (err) {
                console.error(err.message);
            }
        };

        getData();
    }, []);

    console.log({ adventData });

    return (
        <div className="App">
            <header className="App-header"></header>
        </div>
    );
}

export default App;
