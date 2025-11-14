import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const snippet = `// cr8.click
export async function launch(product) {
  const idea = await refine(product.vision)
  const system = await architect(idea, { stack: ['React', 'Node', 'Python', 'Laravel'] })
  return ship(system, { quality: 'production', style: 'tasteful' })
}`

export default function CodeShowcase() {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const s = setInterval(() => {
      setText(snippet.slice(0, i))
      i++
      if (i > snippet.length) {
        clearInterval(s)
      }
    }, 16)
    return () => clearInterval(s)
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Engineering with taste</h2>
            <p className="mt-4 text-gray-700 max-w-xl">Subtle animations, clean architecture, and measurable performance. We build fast, reliable products that feel effortless.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-30" />
            <div className="relative rounded-2xl bg-gray-950 text-gray-200 p-5 ring-1 ring-white/10 shadow-xl font-mono text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap">{text}</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
