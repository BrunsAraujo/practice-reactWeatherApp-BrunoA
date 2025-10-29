function CityList({ onSelectCity }) {
  const cities = ["NewYork", "London", "Tokyo"];

  return (
    <div className="city-list">
      <h2>Select a City</h2>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => onSelectCity(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;