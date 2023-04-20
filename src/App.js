import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';

function App() {
  return (
    <div className="App">
     {/* <Greet />
     <Welcome />
     <Greet name="HARSH">
      <h1>Press ME</h1>
     </Greet>
     <Greet name="Patel"/>
     <Greet name="BANSU"/>
     <Hello />
     <Welcome name="HARSH"/>
     <Welcome name="PATEL"/> */}

     <Message />
    </div>
  );
}

export default App;
