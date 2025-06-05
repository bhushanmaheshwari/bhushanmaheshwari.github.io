export default function AboutMe({ data }) {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl mb-4">About Me</h2>
      <p className="text-base mb-4">{data.desc}</p>
      <blockquote className="italic text-gray-500 mb-4">"{data.quote}"</blockquote>
      <button className="bg-[#607af9] text-white font-semibold rounded-lg px-4 py-2">Get in Touch</button>
    </section>
  );
}