import logo from './logo.svg';
import './App.css';
import GBC from './College';
import Fullstack from './Course';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Fullstack />
          <Student />
          <GBC city="Toronto"/>
        </p>
      </header>
    </div>
  );
}

export default App;
