import { useState } from "react"
import { ChevronDown } from "lucide-react"

const preguntas = [
    {
        pregunta: "¿Desde qué ciudades realizan tours en Chiloé?",
        respuesta:
            "Realizamos tours personalizados en Chiloé con salida desde Castro, Ancud, Dalcahue, Chonchi y Quellón. También coordinamos recogida en hospedajes, cabañas y hoteles dentro de la Isla Grande, según disponibilidad y planificación del recorrido.",
    },
    {
        pregunta: "¿Puedo contratar un tour privado desde Castro?",
        respuesta:
            "Sí. Ofrecemos tours privados desde Castro y otras ciudades de Chiloé. El servicio es exclusivo para tu grupo, lo que permite adaptar horarios, paradas y lugares a visitar según tus intereses y el tiempo disponible.",
    },
    {
        pregunta: "¿Cuánto dura un tour en Chiloé?",
        respuesta: "La duración depende del recorrido elegido. La mayoría de nuestros tours en Chiloé duran entre 7 y 9 horas. Diseñamos cada ruta considerando distancias, clima y preferencias del pasajero."
    },
    {
        pregunta: "¿Realizan traslado privado y transfer al aeropuerto de Mocopulli?",
        respuesta:
            "Sí. Ofrecemos traslado privado en Chiloé y transfer desde y hacia el aeropuerto de Mocopulli (Castro) y el aeropuerto El Tepual en Puerto Montt. Coordinamos horarios según tu vuelo para asegurar puntualidad y comodidad.",
    },
    {
        pregunta: "¿Los tours se adaptan al clima en Chiloé?",
        respuesta: "Sí. El clima en Chiloé puede variar durante el día, por lo que ajustamos el itinerario cuando es necesario para aprovechar mejor las condiciones. También recomendamos vestimenta adecuada según la temporada."
    },
    {
        pregunta: "¿Cómo puedo reservar un tour guiado o traslado en Chiloé?",
        respuesta:
            "Puedes reservar escribiéndonos directamente por WhatsApp. Te ayudaremos a definir el mejor recorrido, horario y punto de salida según tu ubicación y fechas de viaje.",
    },
]

export default function PreguntasFrecuentes() {
    const [activa, setActiva] = useState(null)

    return (
        <section className="pt-32 pb-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    Preguntas frecuentes
                </h2>

                <div className="space-y-6">
                    {preguntas.map((item, index) => (
                        <div
                            key={index}
                            className="border border-primary rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setActiva(activa === index ? null : index)
                                }
                                className="w-full flex justify-between items-center p-6 text-left font-semibold text-black hover:bg-primary/5 transition"
                            >
                                {item.pregunta}
                                <ChevronDown
                                    className={`transition-transform ${activa === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {activa === index && (
                                <div className="px-6 pb-6 text-black/70 leading-relaxed">
                                    {item.respuesta}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
