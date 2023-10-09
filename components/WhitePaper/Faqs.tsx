const Faqs = () => {
  return (
    <section id="faqs" className="mt-16 accordian w-full">
      <div id="faqs" className="flex mb-4">
        <div className="flex border h-[65px] w-[61px]  items-center justify-center rounded-[4px] border-[#726f6f]">
          <span className="font-Norwester text-[20px]">05</span>
        </div>

        <div className="flex items-center">
          <span className="text-[30px] leading-[29px] font-Norwester ml-3">
            FAQs
          </span>
        </div>
      </div>
      <details>
        <summary className="flex items-center">
          <div className="accordion-item flex w-full flex-wrap">
            <div className="font-Glacial text-[20px] leading-[30px] cursor-pointer w-full">
              <div className="flex border mb-4 justify-between">
                <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                  <span className="font-Glacial text-[25px] ml-10">
                    What does ‘Angelshare’ mean?
                  </span>
                </div>
                <div className="flex items-center mr-5">
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
        </summary>
        <div className="mt-4 leading-normal mb-20 w-full my-3 text-md border p-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            explicabo ab! Nulla dignissimos, quis voluptas, nostrum vitae
            dolorem enim aspernatur quas est aliquid nemo exercitationem earum
            quod non voluptatem iure.
        </div>
      </details>
      <details>
        <summary className="flex items-center">
          <div className="font-Glacial text-[20px] leading-[30px] cursor-pointer w-full">
            <div className="flex border mb-4 justify-between">
              <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                <span className="font-Glacial text-[25px] ml-10">
                  Are there parallels to what Angelshare is doing?
                </span>
              </div>
              <div className="flex items-center mr-5">
                <i className=" fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </summary>
        <div className="mt-4 leading-normal px-20 my-3 text-md">
          <div className="border p-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            explicabo ab! Nulla dignissimos, quis voluptas, nostrum vitae
            dolorem enim aspernatur quas est aliquid nemo exercitationem earum
            quod non voluptatem iure.
          </div>
        </div>
      </details>
      <details>
        <summary className="flex items-center">
          <div className="font-Glacial text-[20px] leading-[30px] cursor-pointer w-full">
            <div className="flex border mb-4 justify-between">
              <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                <span className="font-Glacial text-[25px] ml-10">
                  Do you plan to expand the DAO membership beyond 160 in the
                  future?
                </span>
              </div>
              <div className="flex items-center mr-5">
                <i className=" fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </summary>
        <div className="mt-4 leading-normal px-20 my-3 text-md">
          <div className="border p-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            explicabo ab! Nulla dignissimos, quis voluptas, nostrum vitae
            dolorem enim aspernatur quas est aliquid nemo exercitationem earum
            quod non voluptatem iure.
          </div>
        </div>
      </details>
      <details>
        <summary className="flex items-center">
          <div className="font-Glacial text-[20px] leading-[30px] cursor-pointer w-full">
            <div className="flex border mb-4 justify-between">
              <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                <span className="font-Glacial text-[25px] ml-10">
                  How do I get the Angelshare Member Pass?
                </span>
              </div>
              <div className="flex items-center mr-5">
                <i className=" fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </summary>
        <div className="mt-4 leading-normal px-20 my-3 text-md">
          <div className="border p-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            explicabo ab! Nulla dignissimos, quis voluptas, nostrum vitae
            dolorem enim aspernatur quas est aliquid nemo exercitationem earum
            quod non voluptatem iure.
          </div>
        </div>
      </details>
      <details>
        <summary className="flex items-center">
          <div className="font-Glacial text-[20px] leading-[30px] cursor-pointer w-full">
            <div className="flex border mb-4 justify-between">
              <div className="flex p-2 md:h-[65px] w-full items-center justify-start rounded-[4px] border-[#726f6f]">
                <span className="font-Glacial text-[25px] ml-10">
                  Are there any benchmarks to the value of the Talisker Cask of
                  Distinction being bonded?
                </span>
              </div>
              <div className="flex items-center mr-5">
                <i className=" fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </summary>
        <div className="mt-4 leading-normal px-20 my-3 text-md">
          <div className="border p-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            explicabo ab! Nulla dignissimos, quis voluptas, nostrum vitae
            dolorem enim aspernatur quas est aliquid nemo exercitationem earum
            quod non voluptatem iure.
          </div>
        </div>
      </details>
    </section>
  );
};

export default Faqs;
