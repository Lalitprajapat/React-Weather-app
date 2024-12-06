import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SerchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3a29f7994315ebbad1f3581a73ae94c0";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonResponse = await response.json();
            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form's default submit behavior
        console.log("City submitted:", city);
        const newInfo = await getWeatherInfo(); // Wait for weather data
        if (newInfo) {
            console.log("New weather info received:", newInfo);
            updateInfo(newInfo); // Update the parent component's state
        } else {
            console.error("Failed to fetch weather info.");
        }
        setCity(""); // Clear the input field after submission
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
