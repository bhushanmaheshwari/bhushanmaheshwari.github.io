import Image from "next/image";

export default function Certifications({ data }) {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-4 mb-10">
      <h2 className="font-bold text-xl mb-4">Certifications</h2>
      <div className="flex flex-col gap-2">
        {data.map((cert) => (
          <div
            key={cert.title}
            className="flex h-[56px] items-center gap-3 px-3 py-1 bg-[#f7f9fc] rounded-lg"
          >
            <div className="flex w-10 h-10 items-center bg-[#e5e8f4] rounded-lg justify-center">
              <div className="relative w-5 h-5">
                <Image
                  src={cert.icon}
                  alt={cert.title}
                  width={16}
                  height={16}
                  className="absolute top-[2px] left-[2px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-base text-[#0c0f1c] leading-5">
                {cert.title}
              </span>
              <span className="text-[#47569e] text-xs leading-[18px]">
                {cert.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}