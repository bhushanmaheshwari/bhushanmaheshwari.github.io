import portfolioData from "@/data/portfolio.json";
import StitchDesign from "@/components/StitchDesign";

export default function Home() {
  return <StitchDesign data={portfolioData} />;
}