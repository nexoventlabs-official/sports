import { Link } from 'react-router-dom'
import { galleryImages } from '../data/site.js'
import { members } from '../data/members.js'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] grid place-items-center text-white overflow-hidden bg-[linear-gradient(120deg,rgba(11,30,63,.45),rgba(18,42,87,.35)),url('/events/10.png')] bg-cover bg-center">
        <div className="relative text-center max-w-[1000px] px-5 pt-30 pb-15">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 text-xs tracking-[2px] uppercase mb-5">
            Since 1997 • A National Movement
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Building the Future of <span className="text-gradient">Indian Sports</span>
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto mt-5 mb-8">
            More than an organization — a movement to revolutionize India's sports ecosystem,
            identify untapped potential, and provide elite resources so every athlete can compete at the highest level.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link to="/about" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">Discover Our Mission →</Link>
            <Link to="/athletes" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-navy transition-all inline-flex items-center gap-2">Meet Our Athletes</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-15 bg-white/6 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">28+</strong><span className="text-xs opacity-85 tracking-wider">YEARS OF IMPACT</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">5</strong><span className="text-xs opacity-85 tracking-wider">STRATEGIC PILLARS</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">100+</strong><span className="text-xs opacity-85 tracking-wider">EVENTS HOSTED</span></div>
            <div className="text-center"><strong className="block font-heading text-3xl font-black text-[#a8e6b4]">∞</strong><span className="text-xs opacity-85 tracking-wider">UNTAPPED POTENTIAL</span></div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-15 items-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(11,30,63,.08)] aspect-[4/3]">
            <img src="/events/7.png" alt="ISYDCI athletes" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">About ISYDCI</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2 mb-4">More Than an Organization — It Is a Movement.</h2>
            <p className="text-slate-700 text-base leading-relaxed">
              The <b>International Sports and Youth Development Campaign of India</b> is committed to
              revolutionizing the national sports ecosystem by identifying untapped potential and
              providing the elite resources necessary to compete at the highest levels.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Ecosystem','Untapped Potential','Unyielding Spirit','Elite Resources','Nation First'].map(t => (
                <span key={t} className="bg-green-50 text-accent px-3 py-1.5 rounded-full text-xs font-semibold">{t}</span>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/about" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR ATHLETES */}
      <section className="bg-[#f7f2e2] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">Rising Stars</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2">Our Athletes</h2>
            <p className="text-slate-500 mt-3">Meet the talented young athletes enrolled under the ISYDCI programme.</p>
          </div>
          <div className="flex justify-center gap-10 md:gap-16 flex-wrap">
            {members.filter(m => m.photo).map(m => (
              <Link to="/athletes" key={m.id} className="group flex flex-col items-center gap-3">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-navy/15 shadow-[0_8px_30px_rgba(11,30,63,.1)] transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_8px_30px_rgba(47,158,68,.25)] group-hover:-translate-y-1">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-center">
                  <span className="font-heading font-bold text-navy text-sm block">{m.name}</span>
                  <span className="text-xs text-slate-500">{m.sport}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/athletes" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">View All Athletes →</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-bold tracking-[3px] text-xs uppercase">On Ground</span>
            <h2 className="text-navy text-3xl md:text-4xl font-extrabold mt-2">Recent Events</h2>
            <p className="text-slate-500 mt-3">Snapshots from training camps, tournaments and community drives.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {galleryImages.slice(0, 6).map((g, i) => (
              <Link to="/gallery" key={i} className="group relative overflow-hidden rounded-xl aspect-video shadow-[0_10px_30px_rgba(11,30,63,.08)] bg-gray-200">
                <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute left-3.5 bottom-3 text-white font-semibold text-[13px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 z-10">{g.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-gradient text-white px-6 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,158,68,.35)] transition-all inline-flex items-center gap-2">View Full Gallery →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
