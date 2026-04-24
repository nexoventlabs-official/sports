import PageHeader from '../components/PageHeader.jsx'
import { members } from '../data/members.js'

const sportIcon = (s = '') => {
  const x = s.toLowerCase()
  if (x.includes('boxing')) return '🥊'
  if (x.includes('foot')) return '⚽'
  if (x.includes('skat')) return '🛼'
  if (x.includes('rifle') || x.includes('shoot')) return '🎯'
  if (x.includes('kabaddi')) return '🤼'
  if (x.includes('volley')) return '🏐'
  if (x.includes('crick')) return '🏏'
  if (x.includes('athlet') || x.includes('run')) return '🏃'
  if (x.includes('kho')) return '�'
  if (x.includes('raider')) return '🤼'
  return '�🏆'
}

export default function Athletes() {
  return (
    <>
      <PageHeader kicker="Our Athletes" title="Registered Members & Rising Talents" subtitle="Athletes enrolled under the ISYDCI member-registration programme." bg="/events/8.png" />

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map(m => (
              <article key={m.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(11,30,63,.08)] hover:border-green-200 relative before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:z-10 before:bg-gradient-to-r before:from-accent before:to-accent-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-navy to-navy-2">
                  {m.photo
                    ? <img src={m.photo} alt={m.name} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    : <div className="w-full h-full grid place-items-center text-[90px] bg-gradient-to-br from-green-50 to-green-100 text-navy">{sportIcon(m.sport)}</div>}
                  <div className="absolute top-3.5 right-3.5 text-center btn-gradient text-white px-3.5 py-2.5 rounded-xl leading-none shadow-[0_8px_18px_rgba(47,158,68,.35)]">
                    <strong className="font-heading text-2xl font-black block">{m.age}</strong>
                    <span className="text-[10px] tracking-[2px] opacity-75">YRS</span>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="font-heading text-navy text-xl font-bold mb-1.5">{m.name}</h3>
                  <span className="inline-block bg-green-50 text-accent px-3 py-1 rounded-full text-[13px] font-bold mb-3.5">{sportIcon(m.sport)} {m.sport}</span>
                  <div className="flex gap-3.5 flex-wrap text-[13px] text-slate-500 border-t border-dashed border-slate-200 pt-3">
                    <span>📍 {m.state}</span>
                    {m.gender && <span>{m.gender === 'Female' ? '♀' : '♂'} {m.gender}</span>}
                  </div>
                  {m.medals && (
                    <div className="mt-3 bg-[#f7f2e2] rounded-lg px-3 py-2 text-[12.5px] text-slate-600">
                      <span className="font-bold text-navy">🏅 Medals:</span> {m.medals}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
