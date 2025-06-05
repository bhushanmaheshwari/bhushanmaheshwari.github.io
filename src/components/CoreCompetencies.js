import Image from "next/image";

export default function CoreCompetencies({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-8">
      <h2 className="font-bold text-xl mb-4">Core Competencies</h2>
      <div className="flex gap-4 flex-wrap">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 font-medium text-gray-900">
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}