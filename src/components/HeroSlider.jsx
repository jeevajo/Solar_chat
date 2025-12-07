import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { id: 1, image: '/images/product-hero-slider-1.png', title: 'KYARR INCORP', subtitle: 'The Royal Power Of A New Era' },
  { id: 2, image: '/images/product-hero-slider-2.png', title: 'Advanced LiFePO4 Batteries', subtitle: 'Long-lasting backup for 2 nights' },
  { id: 3, image: '/images/product-hero-slider-3.png', title: 'Robust Solar Panels', subtitle: 'High-efficiency panels for Indian roofs' },
  { id: 4, image: '/images/product-hero-slider-4.png', title: 'All-in-One Solutions', subtitle: 'Street lights, hybrid systems & installations' },
  { id: 5, image: '/images/product-hero-slider-5.png', title: '3 Year Warranty', subtitle: 'Reliable service & support' },
]

export default function HeroSlider(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-[60vh] md:h-[75vh] w-full relative">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            aria-hidden={i !== index}
          >
            <img src={s.image} alt={s.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute left-4 md:left-12 top-1/4 md:top-1/3 text-white max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold">{s.title}</h2>
              <p className="mt-3 text-sm md:text-lg">{s.subtitle}</p>
              <div className="mt-6 flex gap-3">
                <a href="tel:" className="px-4 py-2 bg-kyarrBlue text-white rounded shadow">Call Now</a>
                <Link to="/products" className="px-4 py-2 bg-white text-kyarrBlue rounded shadow">Explore Products</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s,i)=>(
          <button key={s.id} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index ? 'bg-white' : 'bg-white/40'}`} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
