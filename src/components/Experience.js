import Image from "next/image";
import { useState, useEffect } from "react";
import "../styles/Experience.css";

export default function Experience({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
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

    const element = document.querySelector('#experience-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="experience-section" className="max-w-5xl mx-auto px-4 mb-12">
      <h2 className="font-bold text-xl md:text-2xl mb-12 animate-fade-in-up">
        15 Years of Experience
      </h2>
      <div className="experience-timeline">
        <div className="timeline-line" />
        
        <div className="timeline-items">
          {data.map((item, idx) => (
            <div
              key={item.title}
              className={`timeline-item ${isVisible ? 'fade-in' : 'fade-out'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="timeline-icon">
                <div className="timeline-icon-inner">
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-title">
                    {item.title}
                  </div>
                  <div className="timeline-description">
                    {item.desc}
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