import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"


import AskQuestion from './pages/AskQuestion'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/askQuestion" element={<AskQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
