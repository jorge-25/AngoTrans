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
import TourPage from "./pages/TourPage"

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
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
              <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
                  <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-primary-light animate-spin [animation-duration:0.6s]" />
                </div>
                {/* Dots */}
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
                  <div className="w-2 h-2 rounded-full bg-primary-light animate-bounce [animation-delay:150ms]" />
                  <div className="w-2 h-2 rounded-full bg-primary-dark animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
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
              <Route path="/tours/:slug" element={<TourPage />} />
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