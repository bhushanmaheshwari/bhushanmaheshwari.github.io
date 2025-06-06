import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import "../styles/Experience.css";

export default function Experience({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const itemsRef = useRef([]);
  const sectionRef = useRef(null);

  // Initial section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRef.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting) {
            // Add to visible items and set as active
            setVisibleItems(prev => [...prev, index]);
            setActiveIndex(index);
          } else {
            // Remove from visible items and clear active state
            setVisibleItems(prev => prev.filter(i => i !== index));
            if (activeIndex === index) {
              setActiveIndex(null);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all experience items
    itemsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeIndex]);

  return (
    <section id="experience" ref={sectionRef} className="max-w-5xl mx-auto px-4 mb-8">
      <SectionHeader title="Experience" isVisible={isVisible} />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200" />
        
        {/* Timeline items */}
        <div className="space-y-20">
          {data.map((item, index) => (
            <div
              key={item.title}
              ref={el => itemsRef.current[index] = el}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } transition-all duration-700 ease-out ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Timeline Node with Year and Location */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-white border border-gray-200 flex flex-col items-center justify-center z-10 transition-all duration-700 ease-out
                  ${activeIndex === index ? 'border-[#607af9] shadow-[0_0_0_2px_#607af9] scale-120' : ''}`}
              >
                <span className={`text-xl font-bold transition-colors duration-700 ease-out ${activeIndex === index ? 'text-[#607af9]' : 'text-gray-700'}`}>
                  {item.year}
                </span>
                <span className={`text-sm transition-colors duration-700 ease-out ${activeIndex === index ? 'text-gray-900' : 'text-gray-600'} mt-1`}>
                  {item.location}
                </span>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-24" : "md:pl-24"} pl-20`}>
                <div 
                  className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-700 ease-out
                    ${activeIndex === index ? 'border-[#607af9] shadow-[0_0_0_2px_#607af9] bg-gray-50 translate-y-[-8px] scale-105' : ''}`}
                >
                  <div className="flex flex-col gap-2">
                    {/* Role */}
                    <div className={`flex items-center gap-2 text-gray-900 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <h3 className={`font-bold text-lg transition-colors duration-700 ease-out ${activeIndex === index ? 'text-[#607af9]' : ''}`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className={`flex items-center gap-2 text-gray-600 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <span className={`text-sm transition-colors duration-700 ease-out ${activeIndex === index ? 'text-gray-900' : ''}`}>
                        {item.skills.join(', ')}
                      </span>
                    </div>

                    {/* Separator */}
                    <div className={`h-px w-full transition-all duration-700 ease-out ${activeIndex === index ? 'bg-[#607af9]' : 'bg-gray-200'}`} />

                    {/* Description List */}
                    <ul className="space-y-2 mt-2">
                      {item.description.map((desc, i) => (
                        <li 
                          key={i} 
                          className={`text-base transition-colors duration-700 ease-out ${activeIndex === index ? 'text-gray-900' : 'text-gray-600'} flex items-start gap-2`}
                        >
                          <div className="relative w-4 h-4 mt-1 flex-shrink-0">
                            <Image
                              src="/globe.svg"
                              alt="chevron"
                              width={16}
                              height={16}
                              className={`transition-colors duration-700 ease-out ${activeIndex === index ? 'text-[#607af9]' : 'text-gray-400'}`}
                            />
                          </div>
                          <span dangerouslySetInnerHTML={{ __html: desc }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}