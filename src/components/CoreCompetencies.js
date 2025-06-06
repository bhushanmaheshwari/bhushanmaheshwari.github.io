import Image from "next/image";
import { useState } from "react";

export default function CoreCompetencies({ data }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl md:text-2xl mb-8 text-center animate-fade-in-up">
        Core Competencies
      </h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={`group relative flex flex-col bg-white border border-gray-200 rounded-lg px-5 py-4 font-medium text-gray-900 
              transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:border-[#607af9]
              animate-fade-in-up min-w-[200px]`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image 
                  src={item.icon} 
                  alt={item.label} 
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="transition-colors duration-300 group-hover:text-[#607af9]">
            {item.label}
              </span>
            </div>

            {/* Proficiency indicator */}
            {item.proficiency && (
              <div className="mt-3 w-full transition-all duration-300"
                style={{ 
                  opacity: hoveredSkill === index ? 1 : 0,
                  transform: hoveredSkill === index ? 'translateY(0)' : 'translateY(10px)',
                  height: hoveredSkill === index ? 'auto' : '0',
                  marginTop: hoveredSkill === index ? '0.75rem' : '0'
                }}>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#607af9] transition-all duration-500 ease-out"
                      style={{ 
                        width: hoveredSkill === index ? `${item.proficiency}%` : '0%',
                        transitionDelay: hoveredSkill === index ? '0ms' : '300ms'
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {item.proficiency}%
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}