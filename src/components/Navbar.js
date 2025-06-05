import Image from "next/image";

export default function Navbar({ data }) {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src={data.logo} alt="Logo" width={20} height={20} />
          <span className="font-semibold text-lg">{data.title}</span>
        </div>
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  );
}