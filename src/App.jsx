import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar, Footer } from "./components";
import { HomePage, InfoPage, NotFoundPage } from "./pages/index";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="info/:id" element={<InfoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
