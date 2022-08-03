import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components";
import { HomePage, InfoPage } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
