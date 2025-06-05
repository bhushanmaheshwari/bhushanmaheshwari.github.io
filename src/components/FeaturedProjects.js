import Image from "next/image";

export default function FeaturedProjects({ data }) {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((proj) => (
          <div key={proj.title} className="bg-white rounded-xl overflow-hidden">
            <Image src={proj.image} alt={proj.title} width={400} height={180} className="object-cover w-full h-44" />
            <div className="p-4">
              <div className="font-semibold text-base mb-1">{proj.title}</div>
              <div className="text-gray-500 text-sm">{proj.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}