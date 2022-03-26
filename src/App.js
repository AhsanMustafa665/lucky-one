import './App.css';
import Masks from './Components/Masks/Masks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter, faMaskFace } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'green', fontFamily: 'cursive', fontSize: '48px' }}>Covid-19 & Extra Protection Musk <FontAwesomeIcon className='mask-style' icon={faMaskFace}></FontAwesomeIcon></h1>
      <h2 style={{ color: 'indigo', fontSize: '40px', fontFamily: 'fantasy', fontWeight: 'lighter' }}>Select 4 Musks here </h2>
      <Masks></Masks>
    </div >
  );
}

export default App;
