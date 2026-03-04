import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { lazy, Suspense } from "react"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Footer from "./components/Footer"
import Contacto from "./components/Contacto"
import PageTransition from "./components/PageTransition"
import ScrollToTop from "./components/ScrollToTop"
import FormularioContacto from "./components/FormularioContanto"
import Nosotros from "./pages/Nosotros"

const TarjetaHernan = lazy(() => import("./pages/TarjetaHernan"))

export default function App() {
  const location = useLocation()

  const hostname = window.location.hostname
  const isHernanSubdomain = hostname.startsWith("hernan.")
  const isTarjetaPath = location.pathname === "/hernan"

  const showTarjeta = isHernanSubdomain || isTarjetaPath

  return (
    <>
      <ScrollToTop />

      {!showTarjeta && <Navbar />}

      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div style={{ textAlign: "center", padding: "60px" }}>
              Cargando...
            </div>
          }
        >
          {showTarjeta ? (
            <TarjetaHernan />
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          )}
        </Suspense>
      </AnimatePresence>

      {!showTarjeta && (
        <PageTransition>
          <Contacto />
          <FormularioContacto />
        </PageTransition>
      )}

      {!showTarjeta && <Footer />}
    </>
  )
}