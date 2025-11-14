import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Design, Code, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">CR8</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-lg text-gray-700 max-w-xl">
            CR8 is where ideas turn into products. We build tools, apps, and platforms that help people move faster, create easier, and launch smarter.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-black transition-colors">Start a Project</a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 ring-1 ring-black/10 px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors">View Work</a>
          </motion.div>
          <div className="mt-8 text-sm text-gray-600">Your vision + our execution = CR8</div>
        </div>
      </div>
    </section>
  )
}
