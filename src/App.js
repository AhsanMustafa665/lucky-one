import logo from './logo.svg';
import './App.css';
import Musks from './Components/Musks/Musks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter, faMaskFace } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'green', fontFamily: 'cursive', fontSize: '48px' }}>Covid-19 & Extra Protection Musk <FontAwesomeIcon className='mask-style' icon={faMaskFace}></FontAwesomeIcon></h1>
      <h2 style={{ color: 'indigo', fontSize: '40px', fontFamily: 'fantasy', fontWeight: 'lighter' }}>Select 4 Musks here </h2>
      <Musks></Musks>
    </div >
  );
}

export default App;
