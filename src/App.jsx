import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegistroPage from "./pages/RegistroPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/registro" element={<RegistroPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
