import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { DealAnalyzerPage } from "../pages/DealAnalyzerPage";
import { GlossaryPage } from "../pages/GlossaryPage";
import { FaqPage } from "../pages/FaqPage";
import { AboutToolPage } from "../pages/AboutToolPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/calculadora-rentabilidad-inmueble"
        element={<DealAnalyzerPage />}
      />
      <Route
        path="/glosario-rentabilidad-inmueble"
        element={<GlossaryPage />}
      />
      <Route
        path="/preguntas-frecuentes-rentabilidad-inmuebles"
        element={<FaqPage />}
      />
      <Route path="/sobre-esta-herramienta" element={<AboutToolPage />} />
    </Routes>
  );
}
