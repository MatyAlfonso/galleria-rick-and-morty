import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage, InfoPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
