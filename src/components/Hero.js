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
          <p className="text-white text-base sm:text-lg md:text-xl text-center mb-4 md:mb-8 max-w-2xl animate-fade-in-up animation-delay-200 drop-shadow-md">
            {data.subtext}
          </p>
          <button className="bg-[#607af9] text-white font-semibold rounded-lg px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg hover:bg-[#4256c9] transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
            {data.cta}
          </button>
        </div>
      </div>
    </section>
  );
}