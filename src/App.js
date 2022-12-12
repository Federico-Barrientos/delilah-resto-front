import logo from './logo.svg';
import './App.css';
import Button  from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='container-careta'>
          <TextField id="standard-basic" label="Anda pa'lla" variant="standard"/>
          <Button variant="contained">Bobo</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
