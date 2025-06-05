export default function Footer({ data }) {
  return (
    <footer className="py-10 text-center text-gray-400 text-sm">
      <p>{data.copyright}</p>
    </footer>
  );
}