import { useState, useEffect, useCallback } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { galleryImages } from '../data/site.js'

function GalleryCard({ src, label, onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div onClick={onClick} className="group relative overflow-hidden rounded-xl aspect-video shadow-[0_10px_30px_rgba(11,30,63,.08)] cursor-pointer bg-slate-200">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-xl" />
      )}
      <img
        src={src} alt={label} loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-108 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute left-3.5 bottom-3 text-white font-semibold text-[13px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">{label}</span>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [])
  return (
    <>
      <PageHeader kicker="On Ground" title="Events & Moments Gallery" subtitle="Snapshots from training camps, tournaments and community drives across India." bg="/events/6.png" />

      <section className="bg-[#f7f2e2] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {galleryImages.map((g, i) => (
              <GalleryCard key={i} src={g.src} label={g.label} onClick={() => setActive(g.src)} />
            ))}
          </div>
        </div>
        {active && (
          <div className="fixed inset-0 bg-slate-950/92 z-[100] grid place-items-center p-5" onClick={() => setActive(null)}>
            <button onClick={() => setActive(null)} className="absolute top-5 right-6 bg-white/10 border border-white/30 text-white w-11 h-11 rounded-full text-xl cursor-pointer">✕</button>
            <img src={active} alt="event" className="max-w-[92vw] max-h-[90vh] rounded-xl" />
          </div>
        )}
      </section>
    </>
  )
}
