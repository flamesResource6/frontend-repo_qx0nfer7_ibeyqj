import { motion } from 'framer-motion'
import { Code2, Smartphone, Boxes, Cog } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance websites, front to back. Modern stacks, accessible UI, and clean code that scales.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native-quality apps with cross-platform frameworks. Fast, reliable, and built for growth.',
  },
  {
    icon: Boxes,
    title: 'Management Systems',
    desc: 'Robust internal tools and dashboards that streamline operations and accelerate decision-making.',
  },
  {
    icon: Cog,
    title: 'Custom Software',
    desc: 'From SaaS to integrations—tailored solutions that fit your workflow and ship with confidence.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-700">We design, build, and ship end-to-end software with precision and polish.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
