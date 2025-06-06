import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import "../styles/Experience.css";

export default function Experience({ data }) {
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

    const element = document.querySelector('#experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 mb-8">
      <SectionHeader title="Experience" isVisible={isVisible} />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200" />
        
        {/* Timeline items */}
        <div className="space-y-16">
          {data.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${isVisible ? "fade-in" : ""}`}
            >
              {/* Icon */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center z-10 transition-all duration-300 hover:border-[#607af9] hover:shadow-[0_0_0_2px_#607af9]`}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
                />
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"} pl-16`}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-300 hover:border-[#607af9] hover:shadow-[0_0_0_2px_#607af9]">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}