import { motion } from 'framer-motion'

const tech = ['React', 'Node.js', 'Python', 'Laravel', 'MongoDB', 'Docker']

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About CR8</h2>
            <p className="mt-4 text-gray-700 max-w-xl">CR8 is where ideas turn into products. We turn complexity into one-click simplicity. Every line of code is intentional. Every interface is crafted. From full‑stack systems to SaaS, we ship production software with taste and rigor.</p>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-800 ring-1 ring-black/5 shadow-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-20" />
            <div className="relative rounded-2xl bg-gray-950 p-6 text-gray-100 shadow-xl ring-1 ring-white/10">
              <div className="text-xs uppercase tracking-wide text-gray-400">Philosophy</div>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">Your vision + our execution = CR8. We operate on clarity, speed, and ownership. Small senior teams. Strong taste. Shipping mindset.</p>
              <div className="mt-6 text-xs uppercase tracking-wide text-gray-400">Values</div>
              <ul className="mt-2 text-sm space-y-2 text-gray-300 list-disc list-inside">
                <li>Design systems that scale</li>
                <li>Optimize for real-world performance</li>
                <li>Automate the boring, amplify the creative</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
