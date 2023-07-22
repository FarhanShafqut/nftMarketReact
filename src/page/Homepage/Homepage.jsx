import Navbar from "../../components/Navbar.jsx/Navbar";
import Button from "../../components/Button.jsx/Button";
import Card from "../../components/Card/card";
import Heading from "../../components/Heading/Heading";
import Bundlescard from "../../components/BundlesCard/BundlesCard";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className=" w-full py-12 sm:py-0 px-4 mx-auto ">
        <div className=" max-w-8xl mx-auto sm:my-20 md:my-20   ">
          <div className="grid sm:my-20 md:my-20  md:grid-cols-2 lg:grid-cols-2 md:space-x-4 2xl:space-x-0  ">
            <div className="space-y-4 sm:ms-10  md:ms-14 2xl:ms-52 ">
              <p className=" max-w-md  font-bold  text-4xl md:text-7xl  text-white  ">
                Discover digital art & Collect NFTs
              </p>
              <p className="w-full  max-w-xl text-2xl text-white">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <Button
                color="bg-purple-600 px-12  rounded-[20px] py-4 hover:bg-purple-700  active:bg-purple-800"
                txt="Get started"
                img={require("../../assests/RocketLaunch.png")}
                imgstyle="inline pe-2"
              />
              <div className="max-w-md grid grid-cols-3 my-1 ">
                <p className=" font-bold text-2xl text-white  ">
                  240k+ <br /> Total Sale
                </p>

                <p className="   text-2xl text-white">
                  240k+ <br /> Total Sale
                </p>

                <p className="text-2xl text-white  ">
                  240k+ <br /> Total Sale
                </p>
              </div>
            </div>

            <Card />
          </div>
        </div>
      </div>
      {/* 2nd page */}
      <Heading
        txt1="Trending Collection"
        txt2="Checkout our weekly updated trending collection."
      />
      <div className="max-w-7xl  px-7  sm:py-0  sm:ms-10  md:ms-10 2xl:ms-52  my-10 ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-32 ">
          <Bundlescard
            img1={require("../../assests/Primary Photo Placeholder.png")}
            img2={require("../../assests/Secondary Photo Placeholder.png")}
            img3={require("../../assests/Secondary Photo Placeholder-1.png")}
            img4={require("../../assests/Avatar Placeholder-5.png")}
            txt="1025+"
            txt1="DSGN Animals"
            txt2="MrFox"
          />
          <Bundlescard
            img1={require("../../assests/Primary Photo Placeholder-1.png")}
            img2={require("../../assests/Primary Photo Placeholder-1.png")}
            img3={require("../../assests/Primary Photo Placeholder-1.png")}
            img4={require("../../assests/Avatar Placeholder-6.png")}
            txt="1025+"
            txt1="Magic Mushrooms"
            txt2="Shroomie"
          />
          <Bundlescard 
            img1={require("../../assests/Primary Photo Placeholder-2.png")}
            img2={require("../../assests/Secondary Photo Placeholder-2.png")}
            img3={require("../../assests/Secondary Photo Placeholder-3.png")}
            img4={require("../../assests/Avatar Placeholder-1.png")}
            txt="1025+"
            txt1="DSGN Disco Machines"
            txt2="BeKind2Robots"
          />
        </div>
      </div>
    </div>
  );
}
