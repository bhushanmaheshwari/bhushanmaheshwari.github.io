import Image from "next/image";
import { useState, useEffect } from "react";

export default function CoreCompetencies({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('core-competencies');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="core-competencies" className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className={`font-bold text-xl md:text-2xl mb-8 text-center transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        Core Competencies
      </h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={`group relative flex flex-col bg-white border border-gray-200 rounded-lg px-5 py-4 font-medium text-gray-900 
              transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
              min-w-[200px]`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease-out ${index * 100}ms`
            }}
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

            {/* Proficiency indicator - Always visible with skill color */}
            {item.proficiency && (
              <div className="mt-3 w-full h-6">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-500 ease-out"
                      style={{ 
                        width: `${item.proficiency}%`,
                        backgroundColor: item.color,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: `all 0.5s ease-out ${index * 100 + 300}ms`
                      }}
                    />
                  </div>
                  <span 
                    className="text-xs font-medium whitespace-nowrap transition-all duration-500 ease-out"
                    style={{ 
                      color: item.color,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(10px)',
                      transition: `all 0.5s ease-out ${index * 100 + 500}ms`
                    }}
                  >
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