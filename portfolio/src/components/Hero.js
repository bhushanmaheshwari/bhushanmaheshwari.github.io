import Image from "next/image";

export default function Hero({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-8 mb-8">
      <div className="relative rounded-xl overflow-hidden bg-white" style={{ height: 340 }}>
        <Image
          src="/hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-8">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl text-center mb-4">{data.headline}</h1>
          <p className="text-white text-lg text-center mb-6 max-w-2xl">{data.subtext}</p>
          <button className="bg-[#607af9] text-white font-semibold rounded-lg px-6 py-3 shadow hover:bg-[#4256c9] transition">{data.cta}</button>
        </div>
      </div>
    </section>
  );
}