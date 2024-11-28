import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetail from "./pages/TeamDetail";

function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />}>
            <Route path=":id" element={<TeamDetail />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
