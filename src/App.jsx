import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page.jsx";
import Catalog from "./pages/catalog.jsx";
import AboutUs from "./pages/about-us.jsx";
import Contacts from "./pages/contacts.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
