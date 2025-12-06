export default function Footer() {
  return (
    <footer className="bg-kyarrDark text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="font-semibold">KYARR INCORP</div>
        <div className="text-sm text-gray-300">The Royal Power Of A New Era</div>
        <div className="mt-2 text-xs">© {new Date().getFullYear()} KYARR INCORP. All rights reserved.</div>
      </div>
    </footer>
  )
}
