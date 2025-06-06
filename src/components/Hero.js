import Image from "next/image";

export default function Hero({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-4 md:mt-8 mb-4 md:mb-8">
      <div className="relative rounded-xl overflow-hidden bg-white" style={{ height: 'min(500px, 80vh)' }}>
        <Image
          src={data.image}
          alt="Hero"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 md:p-8 pt-24 md:pt-32">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl text-center mb-2 md:mb-4 animate-fade-in-up drop-shadow-lg">
            {data.headline}
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl text-center mb-6 md:mb-8 max-w-2xl animate-fade-in-up animation-delay-200 drop-shadow-md">
            {data.subtext}
          </p>
          <div className="flex gap-4 md:gap-6 animate-fade-in-up animation-delay-400">
            {data.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                aria-label={social.name}
              >
                <div className="relative w-6 h-6 md:w-7 md:h-7">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}