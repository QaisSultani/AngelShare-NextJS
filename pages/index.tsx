import LandingSection from "@/components/Home/Landing";
import MemberSection from "@/components/Home/MemberSection";
import MintSection from "@/components/Home/MintSection";
export default function Home() {
  return (
    <div className="mb-auto bg-gradient-to-br from-[#76311D] via-[#09211c] to-[#080808] via-[#111212] overflow-hidden text-white z-40">
      <LandingSection />
      <MintSection />
      <MemberSection />
    </div>
  );
}
