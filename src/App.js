import './App.css';
import Masks from './Components/Masks/Masks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaskFace } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'green', fontFamily: 'cursive', fontSize: '48px' }}>Covid-19 & Extra Protection Musk <FontAwesomeIcon className='mask-style' icon={faMaskFace}></FontAwesomeIcon></h1>
      <h2 style={{ color: 'indigo', fontSize: '40px', fontFamily: 'fantasy', fontWeight: 'lighter' }}>Select 4 Musks here 👇 </h2>
      <Masks></Masks>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How to react works?</Accordion.Header>
          <Accordion.Body>
            1)Not at all concerned with React backend, he is only concerned with front end only user interface.<br></br>

            2) That is, its job is to render / display information.<br></br>
            3) React is not a programming language, just a JavaScript library.<br></br>
            4) React runs in a unidirectional way.<br></br>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Props vs state difference?</Accordion.Header>
          <Accordion.Body>
            State:<br></br>
            1)A state is a type of variable which is directly tied to its parent component.<br></br>
            2)It cannot be accessed nor changed outside of the use case of the component.<br></br>
            3)State is very updatable and changeable.<br></br>
            4)State are mutable.<br></br>
            <br></br>
            <br></br>

            Props:<br></br>
            1)Props can be passed into a component as a attributes for that specific rendering of the component.<br></br>
            2)You can access them inside the component by using props.<br></br>
            3)Props are read-only.<br></br>
            4)Props are immutable.<br></br>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How useState works?</Accordion.Header>
          <Accordion.Body>
            1)The React useState Hook allows us to track state in a function component.<br></br>
            2)State generally refers to data or properites that need to be tracking in an application.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div >

  );
}

export default App;
