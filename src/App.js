import logo from './logo.svg';
import './App.css';
import {signInwithGoogle} from './firebase-config'


function App() {
  return (
    <div className="App">
     <button onClick={signInwithGoogle}>Log in System</button>
    </div>
  );
}

export default App;
