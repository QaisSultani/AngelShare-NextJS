import Bottle from "@/components/WhitePaper/Bottles";
import Faqs from "@/components/WhitePaper/Faqs";
import Goverance from "@/components/WhitePaper/Goverance";
import Introduction from "@/components/WhitePaper/introduction";
import MemberPass from "@/components/WhitePaper/MemberPass";
import TableOfContent from "@/components/WhitePaper/TableOfContent";

export default function whitepaper() {
  return (
    <div className="bg-gradient-to-bl from-[#76311D] via-[#09211c] to-[#080808] via-[#111212] overflow-hidden text-white z-40 scroll-smooth">
      <div className="flex justify-between px-10 md:px-36 py-36">
        <TableOfContent />
        <div className="ml-0 md:ml-[270px] flex justify-center flex-col text-start w-full">
          <Introduction />
          <Bottle />
          <MemberPass />
          <Goverance />
          <Faqs />
        </div>
      </div>
    </div>
  );
}
