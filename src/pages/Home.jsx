import Hero from "../components/Hero"
import PageTransition from "../components/PageTransition"
import QuienesSomos from "../components/QuienesSomos"
import ServiciosHome from "../components/ServiciosHome"
import PreguntasFrecuentes from "../components/PreguntasFrecuentes"
import TestimonioVideo from "../components/TestimonioVideos"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Tours en Chiloé y Traslado privado de pasajeros | AngoTrans"

    let meta = document.querySelector("meta[name='description']")
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }

    meta.setAttribute(
      "content",
      "En AngoTrans realizamos tours en Chiloé y traslados privados de pasajeros desde Castro, Ancud, Dalcahue, Chonchi y Quellón. Ofrecemos transfer desde el aeropuerto de Mocopulli y recorridos turísticos personalizados por la Isla Grande de Chiloé."
    )

    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }

    link.setAttribute("href", "https://angotrans.cl/")
  }, [])

  return (
    <PageTransition>
      <Hero />
      <ServiciosHome />
      <QuienesSomos />
      <TestimonioVideo />
      <PreguntasFrecuentes />
    </PageTransition>
  )
}
