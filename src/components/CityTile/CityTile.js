function CityTile(props) {
  const {
    name,
    temperature,
    icon, 
    size
  } = props

  const citySlug = name.toLowerCase();

  return (
  <li className={`weather-forecast__size--${size}`}>
    <div className={`weather-forecast__city weather-forecast__city--${citySlug}`}>
      <p>{name}</p>
      <p className="weather-forecast__temperature">
        <span className="weather-forecast__temperature-degree">{`${temperature}℃`}</span>
        <i className={`${icon} weather-forecast__temperature-icon`}></i>
      </p>
    </div>
  </li>
  );
}

export default CityTile;
