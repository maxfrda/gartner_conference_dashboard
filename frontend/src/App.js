import logo from './logo.svg';
import './App.css';
import ConferenceList from './components/ConferenceList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceDetail from './components/ConferenceDetail'; // new component
import { Header } from './components/Header';



function App() {
  return (
    <Router>
  <div className="bg-gray-100 min-h-screen">
    <Header/>
    <main>
      <div>
        <Routes>
          <Route path="/conferences/:id" element={<ConferenceDetail />} />
          <Route path="/" element={<ConferenceList />} />
        </Routes>
      </div>
    </main>
  </div>
  </Router>
  );
}
export default App;
