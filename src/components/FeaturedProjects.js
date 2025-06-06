import Image from "next/image";

export default function FeaturedProjects({ data }) {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {data.map((proj) => (
          <div key={proj.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative w-full h-44">
              <Image 
                src={proj.image} 
                alt={proj.title} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold text-base md:text-lg mb-1">{proj.title}</div>
              <div className="text-gray-500 text-sm md:text-base">{proj.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}