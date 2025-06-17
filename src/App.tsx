import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirebreakLocations from "./features/firebreak-locations";
import FireSpreadSimulation from "./features/fire-spread";
import EvacuationRoutesC from "./features/evacuation-routes";

function App() {
  return (
    <Router>
      <div className="h-[80vh] w-[70vw] border border-red-500 m-auto p-4 space-y-4">

        <nav className="flex gap-4 text-sm font-medium border-b pb-2">
          <Link to="/" className="hover:text-blue-600">Firebreaks</Link>
          <Link to="/spread" className="hover:text-blue-600">Fire Spread</Link>
          <Link to="/evacuation" className="hover:text-blue-600">Evacuation</Link>
        </nav>
       
        <Routes>
          <Route path="/" element={<FirebreakLocations />} />
          <Route path="/spread" element={<FireSpreadSimulation />} />
          <Route path="/evacuation" element={<EvacuationRoutesC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
