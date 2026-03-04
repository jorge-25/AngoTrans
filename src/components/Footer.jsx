export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-black/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left">

          {/* Logo */}
          <div>
            <img
              src="/AngoTransLogo.png"
              alt="Logo"
              className="h-12 mx-auto md:mx-0"
            />
          </div>

          {/* Info box */}
          <div className="border border-black/10 rounded-lg px-6 py-4 text-sm space-y-2 shadow-sm mx-auto md:mx-0">
            <p>
              <span className="text-primary font-semibold">Ubicación:</span> Isla Grande de Chiloé
            </p>
            <p>
              <span className="text-primary font-semibold">Teléfono:</span> +56 9 8454 6430
            </p>
            <p>
              <span className="text-primary font-semibold">Correo:</span> contacto@angotrans.cl
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-black/10 text-center text-sm text-black/60">
          © 2026 AngoTrans. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}
