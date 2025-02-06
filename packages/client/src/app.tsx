import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import HotelPage from "./pages/HotelPage"
import CountryPage from "./pages/CountryPage"
import CityPage from "./pages/CityPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hotel/:id" element={<HotelPage />} />
      <Route path="/country/:id" element={<CountryPage />} />
      <Route path="/city/:id" element={<CityPage />} />
    </Routes>
  )
}
