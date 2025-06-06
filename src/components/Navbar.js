import Image from "next/image";
import { useState } from "react";

export default function Navbar({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src={data.logo} alt="Logo" width={20} height={20} />
          <span className="font-semibold text-lg">{data.title}</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#607af9] font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 text-sm hover:bg-gray-200 transition"
          >
            {data.resume}
          </a>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#607af9] font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 text-sm hover:bg-gray-200 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {data.resume}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}