import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { id: 1, image: '/images/product-hero-slider-1.jpg', title: 'KYARR INCORP', subtitle: 'The Royal Power Of A New Era' },
  { id: 2, image: '/images/product-hero-slider-2.jpg', title: 'Advanced LiFePO4 Batteries', subtitle: 'Long-lasting backup for 2 nights' },
  { id: 3, image: '/images/product-hero-slider-3.jpg', title: 'Robust Solar Panels', subtitle: 'High-efficiency panels for Indian roofs' },
  { id: 4, image: '/images/product-hero-slider-4.jpg', title: 'All-in-One Solutions', subtitle: 'Street lights, hybrid systems & installations' },
  { id: 5, image: '/images/product-hero-slider-5.jpg', title: '3 Year Warranty', subtitle: 'Reliable service & support' },
  { id: 6, image: '/images/product-hero-slider-6.jpg', title: 'Powering a Brighter Future', subtitle: 'Reliable solar solutions since 2011' },

{ id: 7, image: '/images/product-hero-slider-7.jpg', title: 'The Royal Power of a New Era', subtitle: 'Advanced solar technology for India' },

{ id: 8, image: '/images/product-hero-slider-8.jpg', title: '13+ Years of Solar Excellence', subtitle: 'Trusted experience in government projects' },

{ id: 9, image: '/images/product-hero-slider-9.jpg', title: 'Trusted by Government Projects', subtitle: 'Proven execution & long-term reliability' },

{ id: 10, image: '/images/product-hero-slider-10.jpg', title: '2500+ Solar Street Lights Installed', subtitle: 'Across roads, layouts, and communities' },

{ id: 11, image: '/images/product-hero-slider-11.jpg', title: 'Advanced Solar Controller Technology', subtitle: 'Designed through continuous R&D' },

{ id: 12, image: '/images/product-hero-slider-12.jpg', title: 'Built for Indian Conditions', subtitle: 'Performs reliably in heat and dust' },

{ id: 13, image: '/images/product-hero-slider-13.jpg', title: 'Reliable Power Day & Night', subtitle: 'Optimized charging and backup' },

{ id: 14, image: '/images/product-hero-slider-14.jpg', title: 'Engineered for Long Battery Life', subtitle: 'Smart dimming and power control' },

{ id: 15, image: '/images/product-hero-slider-15.jpg', title: 'Smart Dimming. Longer Backup', subtitle: 'Up to 16–20 hours of operation' },

{ id: 16, image: '/images/product-hero-slider-16.jpg', title: 'High Performance in Low Sunlight', subtitle: 'Maximum energy capture always' },

{ id: 17, image: '/images/product-hero-slider-17.jpg', title: 'Safe Operation in Extreme Heat', subtitle: 'Handles high voltage securely' },

{ id: 18, image: '/images/product-hero-slider-18.jpg', title: 'Designed for Roads & Highways', subtitle: 'Rugged lighting for public infrastructure' },

{ id: 19, image: '/images/product-hero-slider-19.jpg', title: 'Solar Solutions for Smart Cities', subtitle: 'Efficient, scalable, and future-ready' },

{ id: 20, image: '/images/product-hero-slider-20.jpg', title: 'End-to-End Installation & Maintenance', subtitle: 'From supply to long-term support' },

{ id: 21, image: '/images/product-hero-slider-21.jpg', title: 'Low-Cost Service. High Reliability', subtitle: 'Optimized solutions that last longer' },

{ id: 22, image: '/images/product-hero-slider-22.jpg', title: 'Compatible with All Solar Systems', subtitle: 'We service all brands and models' },

{ id: 23, image: '/images/product-hero-slider-23.jpg', title: 'Custom Solutions for Every Project', subtitle: 'Tailored to wattage and site needs' },

{ id: 24, image: '/images/product-hero-slider-24.jpg', title: 'Government Tender Specialists', subtitle: 'Experienced in public sector projects' },

{ id: 25, image: '/images/product-hero-slider-25.jpg', title: 'Maintenance That Protects Performance', subtitle: 'Cleaning and monitoring throughout warranty' },

{ id: 26, image: '/images/product-hero-slider-26.jpg', title: 'Sustainable Energy. Smart Investment', subtitle: 'Reduce cost. Improve reliability.' },

{ id: 27, image: '/images/product-hero-slider-27.jpg', title: 'Lighting Communities with Solar Power', subtitle: 'Reliable illumination for public spaces' },

{ id: 28, image: '/images/product-hero-slider-28.jpg', title: 'KYARR INCORP', subtitle: 'Power You Can Trust' },

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
