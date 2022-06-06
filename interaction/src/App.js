import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-bootstrap/dist/react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

import PostRequirement from './pages/PostRequirement';
import GetPostRequirements from './pages/GetPostRequirements';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postRequirement" element={<PostRequirement />} />
          <Route path="/getPostRequirements" element={<GetPostRequirements />} />
          <Route path="/sc" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;