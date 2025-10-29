import { useState } from "react";
import CityList from "./components/CityList.jsx";
import CityForecast from "./components/CityForecast.jsx";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      {!selectedCity ? (
        <CityList onSelectCity={setSelectedCity} />
      ) : (
        <CityForecast city={selectedCity} onBack={() => setSelectedCity(null)} />
      )}
    </div>
  );
}

export default App;