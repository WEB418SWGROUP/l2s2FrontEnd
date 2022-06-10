import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


import AskQuestion from './pages/AskQuestion'
import Reviews from './pages/Reviews';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/askQuestion" element={<AskQuestion />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
