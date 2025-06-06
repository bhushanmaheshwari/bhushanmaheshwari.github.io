import Image from "next/image";
import { useState } from "react";

export default function CoreCompetencies({ data }) {
  const [activeSkill, setActiveSkill] = useState(null);

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
              transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
              animate-fade-in-up min-w-[200px]`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              borderColor: activeSkill === index ? item.color : 'rgb(229, 231, 235)'
            }}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
            onTouchStart={() => setActiveSkill(activeSkill === index ? null : index)}
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
              <span className="transition-colors duration-300">
                {item.label}
              </span>
            </div>

            {/* Proficiency indicator - Always visible with muted state */}
            {item.proficiency && (
              <div className="mt-3 w-full h-6">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-500 ease-out relative"
                      style={{ 
                        width: `${item.proficiency}%`,
                        backgroundColor: activeSkill === index ? item.color : '#e5e7eb'
                      }}
                    >
                      {/* Animated overlay */}
                      <div 
                        className={`absolute inset-0 bg-white/30 transition-transform duration-1000 ease-in-out ${
                          activeSkill === index ? 'translate-x-full' : 'translate-x-[-100%]'
                        }`}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap transition-colors duration-300">
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