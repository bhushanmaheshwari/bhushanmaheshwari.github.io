import Image from "next/image";

export default function Experience({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-12">
      <h2 className="font-bold text-xl mb-6">15 Years of Experience</h2>
      <div className="relative pl-6">
        <div className="flex flex-col gap-8">
          {data.map((item, idx) => (
            <div
              key={item.title}
              className="relative flex items-start group"
            >
              {/* Timeline icon and vertical line */}
              <div className="flex flex-col items-center mr-4 z-10 relative">
                <div className="relative">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="opacity-70 grayscale"
                  />
                  {/* Vertical line below icon, except for last item */}
                  {idx < data.length - 1 && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 bg-gray-200" style={{ height: '32px' }} />
                  )}
                </div>
              </div>
              {/* Experience content, no box */}
              <div className="flex-1 pl-1">
                <div className="font-semibold text-base mb-1 text-gray-900">{item.title}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}