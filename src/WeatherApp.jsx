import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Chandigarh",
        temp: 25,
        feelsLike: 17,
        tempMin: 16,
        humidity: 47,
        tempMax: 25.05,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        if (newInfo) {
            console.log("Updating weatherInfo state with:", newInfo);
            setWeatherInfo(newInfo);
        } else {
            console.warn("No new info to update!");
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}
