import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar, Footer } from "./components";
import { HomePage, InfoPage } from "./pages/index";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="info" element={<InfoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
