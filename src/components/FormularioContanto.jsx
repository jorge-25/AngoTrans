import { useState } from "react"

export default function FormularioContacto() {
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const data = new FormData(form)

        const res = await fetch("https://formspree.io/f/xvzbokkw", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        })

        if (res.ok) {
            setEnviado(true)
            form.reset()
        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 shadow-lg">
                {!enviado ? (
                    <>
                        <h3 className="text-2xl font-bold mb-8 text-center">
                            Contáctanos
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Honeypot anti-spam (NO visible para humanos) */}
                            <input
                                type="text"
                                name="_gotcha"
                                style={{ display: "none" }}
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <input
                                type="text"
                                name="nombre"
                                required
                                placeholder="Nombre y Apellido"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Correo"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                type="tel"
                                name="telefono"
                                required
                                placeholder="Teléfono"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <textarea
                                name="mensaje"
                                required
                                rows={4}
                                placeholder="Cuéntanos qué necesitas, te contactaremos a la brevedad"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-3">
                            ¡Mensaje enviado con éxito!
                        </h3>
                        <p className="text-black/70">
                            Gracias por contactarnos. Te responderemos a la brevedad.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}