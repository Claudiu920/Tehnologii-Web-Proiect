import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TelefoanePage from "./pages/TelefoanePage.jsx";
import TelefonDetaliuPage from "./pages/TelefonDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TelefoanePage />} />
        <Route path="/telefoane/:id" element={<TelefonDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}