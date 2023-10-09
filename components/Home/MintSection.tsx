import bottle from "../../public/images/Landing/Bottle.png";

function MintSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between px-[50px] md:px-[150px]">
        <div className="flex items-center font-Glacial w-full md:w-[535px] text-[26px]">
          The genesis edition of Angelshare Bottle NFTs begins with “Angelshare
          001”.
          <br /> <br />
          The collection is limited to 160 bottles belonging to a 32 Year Old
          Talisker Cask of Distinction Single Malt Whisky, exclusively sourced
          and bottled from the distillery through our partner Diageo.
        </div>
        <div className="bg-white bg-opacity-5 backdrop-blur-lg flex justify-center rounded-[15px] w-auto  h-auto">
          <div className="grid">
            <span className="text-center font-Norwester text-[20px] pt-10">
              Minting Soon
            </span>
            <img src={bottle.src} className="md:mx-5 my-10" alt="" />
            <span className="font-Norwester text-center text-[32px]">
              “ANGELSHARE 001”
            </span>
            <span className="font-Norwester text-center text-[20px] py-4">
              Talisker 32 Year Old Cask of Distinction <br />+ <br />
              Angelshare Member Pass
            </span>
            <button className="rounded-xl py-5 my-10 mx-auto bg-gradient-to-r from-[#DC9B27] to-[#D14E30] w-[250px]">
              <span className="font-Norwester text-[20px]">
                APPLY FOR ACCESS
              </span>
            </button>
          </div>
        </div>
      </div>
      </>
  );
}

export default MintSection;
