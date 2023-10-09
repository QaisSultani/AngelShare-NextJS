const Goverance = () => {
  return (
    <section id="governance" className="mt-16">
      <div id="governance" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">04</span>
        </div>
        <div className="flex items-center">
          <span className="text-[30px] leading-[29px] font-Norwester ml-3">
            Governance
          </span>
        </div>
      </div>
      <div className="font-Glacial text-[20px] leading-[30px]">
        While the functioning and upkeep of the syndicate and its operations
        will be managed by a small group of core members and admins, investors
        in the Angelshare DAO will have critical governance & ownership
        privileges.
        <br />
        <br /> Investors in our DAO will have voting rights that allow them to
        collectively determine whether future projects are funded or when key
        decisions need to be made about syndicated investments, events or other
        casks like the “Angelshare 001” edition. Each member has a voting share
        that is proportional to the number of Bottle NFTs that have been minted
        by the member.
        <br />
        <br />
        Core members would additionally have a 20% super voting and ownership
        share in the DAO (akin to holding 40 membership NFTs on top of the 160
        being minted for “Angelshare 001”). This 20% distribution would also
        extend to further mints beyond “Angelshare 001”.
        <br />
        <br />
      </div>
      <div className="font-Glacial text-[25px]">Governance Construct</div>
      <ul className="list-disc mt-5 font-Glacial text-[20px] ml-8">
        <li>Every member will have the ability to vote once per proposal.</li>
        <li>
          There will be a debating period of one week minimum or more, as set
          based on the proposal.
        </li>
        <li>
          Accepting a proposal after the debating period will require a majority
          decision and a participation rate of at least 30%.
        </li>
      </ul>
      <div className="font-Glacial text-[25px]">Ownership Construct</div>
      <ul className="list-disc mt-5 font-Glacial text-[20px] ml-8">
        <li>
          All secondary transaction commissions from NFT sales go back into the
          DAO treasury and would be equally distributed amongst all members.
        </li>
        <li>
          All profits, net of fees and expenses will also be distributed equally
          back to NFT holders.
        </li>
      </ul>
      <br />
      <div className="font-Glacial text-[20px]">
        The number of NFTs will likely increase over time given future projects
        and collabs, but the governance mechanism will largely stay the same.
      </div>
    </section>
  );
};

export default Goverance;
