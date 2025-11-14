import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered SaaS Platform',
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI'],
    blurb: 'Real-time insights, billing, and user management with a modular architecture.',
  },
  {
    title: 'E-commerce Headless Storefront',
    stack: ['Next.js', 'Stripe', 'GraphQL'],
    blurb: 'Ultra-fast, SEO-friendly storefront with cart, checkout, and admin tools.',
  },
  {
    title: 'Operations Dashboard',
    stack: ['React', 'Python', 'FastAPI', 'MongoDB'],
    blurb: 'Data pipelines, metrics, and alerts in a sleek, role-based dashboard.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-700">A snapshot of recent builds that blend engineering rigor with product taste.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_40%)]" />
                <div className="absolute bottom-2 right-2 text-[10px] text-white/70">{p.stack.join(' • ')}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
