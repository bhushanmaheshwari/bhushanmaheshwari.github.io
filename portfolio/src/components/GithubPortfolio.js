import Image from "next/image";

export default function GithubPortfolio({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl mb-4">GitHub Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map((proj) => (
          <div
            key={proj.title}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-48"
          >
            <div className="relative w-full h-24">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
            <div className="flex-1 flex flex-col px-3 py-2">
              <div className="font-medium text-xs mb-0.5">{proj.title}</div>
              <div className="text-gray-500 text-xs">{proj.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-100 rounded-lg px-4 py-2 font-semibold text-sm text-gray-900 hover:bg-gray-200 transition"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}