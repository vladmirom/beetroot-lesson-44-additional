import Title from './components/Title/Title';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <main className="main">
      <div className="weather-forecast container">
        <Title/>
        <WeatherForecast/>
        <Comment/>
      </div>
    </main>
  );
}

export default App;
