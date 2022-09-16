import './App.css';
import Weather from './components/Weather';
import Time from './components/Time';
import DateToday from './components/DateToday';
import Quote from './components/Quote';




function App() {
  return (
    <div>
     <Weather />
     <Time />
     <DateToday />
     <Quote />
    </div>
  );
}

export default App;
