import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageCarousel({ images = [], alt = "" }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const hasMultiple = images.length > 1

  const go = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + images.length) % images.length)
  }

  const variants = {
    enter:  (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center:          { x: 0, opacity: 1 },
    exit:   (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] select-none">

      {/* Imagen principal */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.38, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      {/* Flechas */}
      {hasMultiple && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dots */}
      {hasMultiple && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-primary scale-125" : "bg-primary/40"
              }`}
            />
          ))}
        </div>
      )}

    </div>
  )
}