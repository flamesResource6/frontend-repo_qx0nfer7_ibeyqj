export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10 bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold">C</div>
              <span className="font-semibold tracking-tight text-white">CR8</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-md">CR8 is where ideas turn into products. We build tools, apps, and platforms that help people move faster, create easier, and launch smarter.</p>
            <div className="mt-4 text-sm text-gray-400">cr8.click</div>
          </div>
          <div className="md:justify-self-end">
            <div className="text-sm uppercase tracking-wide text-gray-400">Get in touch</div>
            <a href="mailto:hello@cr8.click" className="mt-2 inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:bg-gray-100">hello@cr8.click</a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} CR8. All rights reserved.</div>
      </div>
    </footer>
  )
}
