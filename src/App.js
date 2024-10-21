import logo from './logo.svg';
import './App.css';
import './css/UTMGeneratorTable.css';
import UTMGeneratorTable from './components/UTMGeneratorTable.js';
import UTMOutputBox from './components/UTMOutputBox.js';
import utminfo from './components/UTMFields.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UTMGeneratorTable />
        <UTMOutputBox />
      </header>
    </div>
  );
}

export default App;
