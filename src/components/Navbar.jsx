import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const esActivo = (path) => location.pathname === path

    const irAlInicio = () => {
        setOpen(false)

        if (location.pathname !== "/") {
            navigate("/")
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
            }, 300)
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const irAContacto = () => {
        setOpen(false)

        if (location.pathname !== "/") {
            navigate("/")
            setTimeout(() => {
                document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
            }, 300)
        } else {
            document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
        }
    }

    const claseItem = (path) =>
        esActivo(path)
            ? "text-primary font-semibold border-b-2 border-primary pb-1"
            : "text-black/80 hover:text-primary transition-colors"

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur border-b border-black/10">

                {/* Logo */}
                <img
                    src="/AngoTransLogo.png"
                    alt="AngoTrans"
                    className="h-10 w-auto cursor-pointer"
                    onClick={irAlInicio}
                />

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-10 text-sm">
                        <li>
                            <button onClick={irAlInicio} className={claseItem("/")}>
                                Inicio
                            </button>
                        </li>

                        <li>
                            <Link to="/servicios" className={claseItem("/servicios")}>
                                Servicios
                            </Link>
                        </li>

                        <li>
                            <Link to="/nosotros" className={claseItem("/nosotros")}>
                                Nosotros
                            </Link>
                        </li>
                    </ul>

                    <button
                        onClick={irAContacto}
                        className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
                    >
                        Contáctanos
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-black"
                    aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-b"
                    >
                        <ul className="flex flex-col items-center text-center px-6 py-6 gap-6 text-sm">
                            <button onClick={irAlInicio} className={claseItem("/")}>
                                Inicio
                            </button>

                            <Link
                                to="/servicios"
                                onClick={() => setOpen(false)}
                                className={claseItem("/servicios")}
                            >
                                Servicios
                            </Link>

                            <Link
                                to="/nosotros"
                                onClick={() => setOpen(false)}
                                className={claseItem("/nosotros")}
                            >
                                Nosotros
                            </Link>

                            <button
                                onClick={irAContacto}
                                className="mt-4 w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold"
                            >
                                Contáctanos
                            </button>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
