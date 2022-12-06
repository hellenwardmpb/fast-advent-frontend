import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Door } from "./components/Door/Door";

function App() {
    const [adventData, setAdventData] = useState([]);
    const [doors, setDoors] = useState([]);

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

                setAdventData(response.data.resources);

                if (adventData) {
                    const doors = adventData.map((door, index) => {
                        return <Door props={door} key={index} />;
                    });

                    setDoors(doors);
                }
            } catch (err) {
                console.error(err.message);
            }
        };

        getData();
    }, [adventData.length]);

    return (
        <div className="App">
            <Header />
            {/* {doors} */}
            <Door props={doors[0]} />
        </div>
    );
}

export default App;
