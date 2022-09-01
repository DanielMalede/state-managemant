import './App.css';
import Counter from './components/pages/Counter/Counter';
import CounterProvider from './context/Counter-Context/Counter-Context';
import Home from './components/pages/Home/Home'
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
