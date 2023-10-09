const Introduction = () => {
  return (
          <section id="Intro" className="flex w-full flex-col ">
            <div className="flex mb-4">
              <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
                <span className="font-Norwester text-[30px]">01</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-[24px] font-Norwester ml-3">
                  Introduction
                </span>
              </div>
            </div>
            <div className="font-Glacial text-[20px] flex w-full justify-center leading-[30px]">
              Angelshare is a members-only club that brings together the best of
              whisky and web3 to a spirited group of innovators and investors
              passionate about accelerating technological progress through
              networking events and syndicated investments.
              <br />
              <br /> Headquartered in Singapore, membership to the club is
              signified through the ownership of the Angelshare Member Pass, a
              lifelong membership NFT which is granted to those who mint the
              Angelshare Bottle NFTs. Each Angelshare Bottle NFT is backed by
              its physical twin – a bottle of rare investment-grade whisky,
              which can be redeemed from our facility in Singapore.
              <br />
              <br /> The Angelshare project begins with the “Angelshare 001”
              Bottle NFT.
            </div>
          </section>
  );
};

export default Introduction;
