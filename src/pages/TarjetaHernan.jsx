import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Download, Globe, MapPin, Share2, QrCode, X } from "lucide-react"
import { useState } from "react"
import QRCode from "react-qr-code"

export default function TarjetaHernan() {
  const [showQR, setShowQR] = useState(false)
  const cardURL = "https://hernan.angotrans.cl"

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hernán Andrade Márquez - AngoTrans',
          text: 'Tarjeta de presentación digital - Tours y traslados en Chiloé',
          url: cardURL,
        })
      } catch (err) {
        console.log('Error al compartir:', err)
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(cardURL)
      alert('¡Enlace copiado al portapapeles!')
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#cdfaff] to-[#e8f5f3] p-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header con logo y degradado */}
        <div className="relative h-32 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <img
            src="/AngoTransLogo.png"
            alt="AngoTrans"
            className="h-16 filter brightness-0 invert"
          />
        </div>

        {/* Foto de perfil y botones de acción */}
        <div className="relative -mt-16 mb-4 px-6">
          <div className="flex items-end justify-between">
            {/* Foto de perfil */}
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
              <img
                src="/hernan-andrade.jpg"
                alt="Hernán Andrade Márquez"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Botones QR y Compartir */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setShowQR(true)}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition shadow-lg"
              >
                <QrCode size={22} className="text-white" />
              </button>
              <button
                onClick={handleShare}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition shadow-lg"
              >
                <Share2 size={22} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="px-6 pb-8">
          {/* Nombre y cargo */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">
            Hernán Andrade Márquez
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Conductor Profesional · AngoTrans
          </p>

          {/* Botones de acción principales */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <a
              href="tel:+56984546430"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Llamar</span>
            </a>

            <a
              href="https://wa.me/56984546430"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">WhatsApp</span>
            </a>

            <a
              href="mailto:contacto@angotrans.cl"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Email</span>
            </a>
          </div>

          {/* Botón guardar contacto */}
          <a
            href="/hernan.vcf"
            download
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg mb-6"
          >
            <Download size={20} />
            Guardar contacto
          </a>

          {/* Descripción del servicio */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-center text-gray-700 leading-relaxed">
              Tours personalizados y traslado privado en Chiloé. Viajes especiales, Transfer aeropuerto.
            </p>
          </div>

          {/* Información adicional */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span>Castro, Isla Grande de Chiloé</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Globe size={18} className="text-primary flex-shrink-0" />
              <span>www.angotrans.cl</span>
            </div>
          </div>

          {/* Botón página web */}
          <a
            href="https://angotrans.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 text-center bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition border-2 border-primary/20"
          >
            Visita nuestra página web
          </a>

        </div>
      </motion.div>

      {/* Modal QR Code */}
      {showQR && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowQR(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-bold text-center mb-2">
              Comparte mi tarjeta
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Escanea este código QR
            </p>

            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 flex justify-center">
              <QRCode
                value={cardURL}
                size={220}
                fgColor="#09aa96"
                level="H"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}