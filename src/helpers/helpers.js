import axios from "axios";

export const getData = async () => {
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

        console.log(response.data);
    } catch (err) {
        console.error(err.message);
    }
};
