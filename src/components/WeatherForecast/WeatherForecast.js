import CityTile from '../CityTile/CityTile';

function WeatherForecast() {
  const cities = [{
    name: 'Lisbon',
    temperature: 21,
    icon: 'wi wi-day-sunny',
    size: 'half'
  },
  {
    name: 'Paris',
    temperature: 11,
    icon: 'wi wi-night-sleet',
    size: 'quarter'
  },
  {
    name: 'Belgrade',
    temperature: 15,
    icon: 'wi wi-day-cloudy',
    size: 'quarter'
  },
  {
    name: 'Venice',
    temperature: 21,
    icon: 'wi wi-day-cloudy-high',
    size: 'quarter'
  },
  {
    name: 'Tel-Avive',
    temperature: 32,
    icon: 'wi wi-hot',
    size: 'quarter'
  },
  {
    name: 'Cairo',
    temperature: 21,
    icon: 'wi wi-day-sunny',
    size: 'quarter'
  },
  {
    name: 'New-York',
    temperature: 17,
    icon: 'wi wi-day-sleet-storm',
    size: 'quarter'
  },
  {
    name: 'New-Delhi',
    temperature: 17,
    icon: 'wi wi-rain-wind',
    size: 'quarter'
  },
  {
    name: 'San-Francisco',
    temperature: 15,
    icon: 'wi wi-day-sunny-overcast',
    size: 'half'
  },
  {
    name: 'Tokyo',
    temperature: 8,
    icon: 'wi wi-night-clear',
    size: 'quarter'
  },
  {
    name: 'Sydney',
    temperature: 15,
    icon: 'wi wi-night-partly-cloudy',
    size: 'full'
  }
]

  return (
    <ul className='weather-forecast__table'>
      { cities.map((city) => <CityTile name={city.name} temperature={city.temperature} icon={city.icon} size={city.size} /> )}
    </ul>
  );
}

export default WeatherForecast;