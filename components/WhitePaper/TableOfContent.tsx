import AnchorLink from "react-anchor-link-smooth-scroll";

const TableOfContent = () => {
  return (
    <div className="fixed hidden md:block">
      <div className="mb-4">
        <span className="font-Norwester text-[30px]">Table of Contents</span>
      </div>
      <AnchorLink href="#Intro" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">01</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px] font-Glacial ml-3">Introduction</span>
        </div>
      </AnchorLink>
      <AnchorLink href="#bottles" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">02</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px] leading-[29px] w-9 font-Glacial ml-3">
            Angelshare Bottles
          </span>
        </div>
      </AnchorLink>
      <AnchorLink href="#members" className="flex mb-4 ">
        <div className="flex border h-[65px] w-[75px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">03</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px] leading-[29px] font-Glacial ml-3">
            Member Pass & <br />
            Perks
          </span>
        </div>
      </AnchorLink>
      <AnchorLink href="#governance" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">04</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px] leading-[29px] font-Glacial ml-3">
            Governance
          </span>
        </div>
      </AnchorLink>
      <AnchorLink href="#faqs" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">05</span>
        </div>
        <div className="flex items-center">
          <span className="text-[24px] leading-[29px] font-Glacial ml-3">
            FAQs
          </span>
        </div>
      </AnchorLink>
    </div>
  );
};

export default TableOfContent;
