import logo from './logo.svg';
import './App.css';
import ConferenceList from './components/ConferenceList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceDetail from './components/ConferenceDetail'; // new component




function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Conference App</h1>
      </header>
      <main>
        <Routes>
          <Route path="/conferences/:id" element={<ConferenceDetail />} />
          <Route path="/" element={<ConferenceList />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}
export default App;
