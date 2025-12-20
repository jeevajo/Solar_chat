import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { id: 1, image: '/images/product-hero-slider-1.jpg', title: 'KYARR INCORP', subtitle: 'The Royal Power Of A New Era' },
  { id: 2, image: '/images/product-hero-slider-2.jpg', title: 'Advanced LiFePO4 Batteries', subtitle: 'Long-lasting backup for 2 nights' },
  { id: 3, image: '/images/product-hero-slider-3.jpg', title: 'Robust Solar Panels', subtitle: 'High-efficiency panels for Indian roofs' },
  { id: 4, image: '/images/product-hero-slider-4.jpg', title: 'All-in-One Solutions', subtitle: 'Street lights, hybrid systems & installations' },
  { id: 5, image: '/images/product-hero-slider-5.jpg', title: '3 Year Warranty', subtitle: 'Reliable service & support' },
  { id: 6, image: '/images/product-hero-slider-6.jpeg', title: 'Powering a Brighter Future', subtitle: 'Reliable solar solutions since 2011' },
  { id: 7, image: '/images/product-hero-slider-7.jpeg', title: 'The Royal Power of a New Era', subtitle: 'Advanced solar technology for India' },
  { id: 8, image: '/images/product-hero-slider-8.jpeg', title: '13+ Years of Solar Excellence', subtitle: 'Trusted experience in government projects' },
  { id: 9, image: '/images/product-hero-slider-9.jpeg', title: 'Trusted by Government Projects', subtitle: 'Proven execution & long-term reliability' },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)

  // Auto slide (pause on hover)
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex(i => (i + 1) % slides.length)
      }, 3500)
    }

    return () => clearInterval(intervalRef.current)
  }, [isHovered])

  const nextSlide = () => {
    setIndex(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[60vh] md:h-[75vh] w-full overflow-hidden relative">

        {/* SLIDES CONTAINER */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map(s => (
            <div key={s.id} className="min-w-full h-full relative">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute left-4 md:left-12 top-1/4 md:top-1/3 text-white max-w-xl">
                <h2 className="text-3xl md:text-5xl font-extrabold">{s.title}</h2>
                <p className="mt-3 text-sm md:text-lg">{s.subtitle}</p>

                <div className="mt-6 flex gap-3">
                  <Link
                    to="/products"
                    className="px-4 py-2 bg-white text-kyarrBlue rounded shadow"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ⬅️ LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/80 text-white p-3 rounded-full
                     opacity-0 group-hover:opacity-100 transition"
        >
          ‹
        </button>

        {/* ➡️ RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/80 text-white p-3 rounded-full
                     opacity-0 group-hover:opacity-100 transition"
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
