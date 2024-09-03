import logo from './logo.svg';
import './App.css';
import ConferenceList from './components/ConferenceList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConferenceDetail from './components/ConferenceDetail'; // new component




function App() {
  return (
    <Router>
  <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-800 text-white py-6 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold">Gartner</h1>
      </div>
    </header>
    <main className="py-8">
      <div className="container mx-auto">
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
