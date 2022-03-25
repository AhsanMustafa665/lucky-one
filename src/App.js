import logo from './logo.svg';
import './App.css';
import Musks from './Components/Musks/Musks';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'green', fontFamily: 'cursive', fontSize: '48px' }}>Covid-19 & Extra Protection Musk</h1>
      <h2 style={{ color: 'indigo', fontSize: '40px' }}>Select 4 Musks here.</h2>
      <Musks></Musks>
    </div >
  );
}

export default App;
