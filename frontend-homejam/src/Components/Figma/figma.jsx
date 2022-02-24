// importing react
import React from "react";

// importing required icons from react-icons
import {
  HiSearch,
  HiShoppingBag,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineClipboardCopy,
} from "react-icons/hi";
import { FiHeart } from "react-icons/fi";

// importing circular progress bar from the respective packages
import { CircularProgress } from "@mui/material";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

// importing reviews.js
import review from "./reviews";

// importing shows.js
import shows from "./shows";

function HomeJam() {
  return (
    <>
      <div className="block p-3" id="backgroundimage">
        <div className="container flex flex-row gap-5 justify-center">
          <div className="w-24 h-12  relative left-32">
            <img
              src="https://s3-alpha-sig.figma.com/img/a903/9b46/0662010ff5502364c9f4da64de3b3531?Expires=1646611200&Signature=cyKanHZNFNXg0kQJ-iJZjpjWQ-lNvOlwutZw6zNBhOT-1eIxaSkuCmoxgnw6y7XjlYJHERlm5iIPFuqc4ka7bnaeEySle7Pt94j7B~naOmPGrdHPrBCuLwLtckpYj8VMVpQ4ohJ02qPvjS0G5k4G01-vntUfJ6tS0hRQ-AfTUCmDnAkfhNVgeqAfgx1dsMD-GMtdzeTZuhtQ-2L9pN~htPu0L-TImXBM0Pe0sPHAL1mtEkkyQQMxiXSiNoZs34bvpeKxYHBwj6WEAOZ0N8H5BV0D1dwYEMh3dgq~ZrCIABEzzKopWQI4AjPiILdnEVLDcyTGhgS1l1wBbtjYbwvKTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="homejam"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-row gap-5 text-white  w-4/5 justify-end">
            <div className="flex flex-row mt-1">
              <HiSearch className="w-12 h-8" />
              <h3>Search</h3>
            </div>
            <div className="mt-1">
              <h3>Help</h3>
            </div>
            <div className="mt-1">
              <h3>Account</h3>
            </div>
            <div className="mt-1">
              <HiShoppingBag className="w-12 h-8" />
            </div>
          </div>
        </div>
        <div id="content">
          <h1>CARI CARI</h1>
          <h3>
            Live from their sofa to yours.Get closer to your favourite <br />{" "}
            artists, and never miss out.
          </h3>
        </div>
        <div
          className="flex flex-row justify-center flex-wrap w-4/5 gap-20  left-28 mb-10"
          id="progress"
        >
          <div className="border-2 border-gray-600 rounded-full w-52 h-52 ">
            <CircularProgress
              variant="determinate"
              value={66}
              size={208}
              thickness={0.8}
              color={"secondary"}
            />
            <FiHeart className="w-8 h-8 text-blue-700 relative left-20 bottom-40" />
            <p className="left-24 text-white text-xl relative bottom-36">0</p>
            <p className="left-20 text-white text-xl relative bottom-32">
              Label
            </p>
          </div>
          <div className="border-2 p-3 border-gray-600 rounded-full  w-52 h-52">
            <CircularProgressbarWithChildren
              variant="determinate"
              value={0}
              size={208}
              thickness={0.8}
            >
              <p className="text-center text-white p-2">
                <HiOutlineClipboardCopy className="w-8 h-8" />
              </p>
              <p className="text-center text-white text-xl p-2">0</p>
              <p className="text-center text-white text-xl p-2">Label</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="border-2 p-3 border-gray-600 rounded-full  w-52 h-52">
            <CircularProgressbarWithChildren
              variant="determinate"
              value={0}
              size={208}
              thickness={0.8}
            >
              <p className="text-center text-white p-2">
                <HiOutlineClipboardCopy className="w-8 h-8" />
              </p>
              <p className="text-center text-white text-xl p-2">0</p>
              <p className="text-center text-white text-xl p-2">Label</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="border-2 p-3 border-gray-600 rounded-full  w-52 h-52">
            <CircularProgressbarWithChildren
              variant="determinate"
              value={0}
              size={208}
              thickness={0.8}
            >
              <p className="text-center text-white p-2">
                <HiOutlineClipboardCopy className="w-8 h-8" />
              </p>
              <p className="text-center text-white text-xl p-2">0</p>
              <p className="text-center text-white text-xl p-2">Label</p>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="container w-4/5 relative  top-80  left-40 h-16">
          <div className="w-3/5 h-full float-left">
            <h1 className="text-white text-5xl relative left-3">
              <span className=" border-b-4 border-blue-600">Up</span>
              <span>coming Shows</span>
            </h1>
          </div>
          <div className="w-1/5 h-full float-right text-right p-3 ">
            <h3 className="text-xl text-yellow-600 relative right-4">
              View All
            </h3>
          </div>
        </div>
        <div className="container  relative top-96  flex flex-row flex-wrap justify-center gap-10 ">
          {/* mapping the imported shows array from shows.js and respectively showing the listed shows in the array */}
          {shows.map((card) => {
            return (
              <div className="h-96 w-64 border-2  rounded-lg" id="card">
                {/* printing the data in the console  */}
                {console.log(card)}
                <img
                  src={card.src}
                  alt="card"
                  className="w-full h-56 brightness-75 rounded-t-lg"
                />
                <span className=" relative top-4 left-4">{card.category}</span>
                <h3 className="text-white relative top-6 left-4 text-3xl">
                  {card.name}
                </h3>
                <h4 className="text-blue-700 relative left-4 top-12  text-xl">
                  More Info <HiArrowRight className=" ml-4 w-8 h-8 inline" />
                  <div className=" ml-5 inline border-l-2 border-gray-700">
                    {/* <HiOutlineTicket className="inline ml-4 w-8 h-8 text-red-500"/> */}
                    {card.ticket}
                  </div>
                  {card.finger}
                </h4>
              </div>
            );
          })}
        </div>
        <div className="container w-4/5 relative top-2/4 left-40 h-16 mt-24">
          <div className="w-3/5 h-full float-left">
            <h1 className="text-white text-5xl relative left-3">
              <span className=" border-b-4 border-blue-600">Re</span>
              <span>views</span>
            </h1>
          </div>
          <div className="w-1/5 h-full float-right text-right p-3 text-xl flex flex-nowrap">
            <span className="text-white">1</span>
            <span className="text-gray-400">/12</span>
            <span className="text-gray-400 px-12 flex flex-nowrap gap-2">
              <HiArrowLeft />
              <HiArrowRight />
            </span>
          </div>
        </div>
        <div
          className="container flex flex-row flex-wrap bottom-5  gap-10 p-2 justify-center relative "
          id="review"
        >
          {/*  mapping the imported review array from reviews.js and respectively showing the reviews currently present in the array  */}
          {review.map((data) => {
            return (
              <div
                className="w-96 h-72 rounded-2xl  flex flex-col gap-5 p-4 border-2 border-yellow-600"
                id="reviewcard"
              >
                <div className="w-full flex flex-row gap-3">
                  <div className="w-16 ">
                    <img
                      src={data.image}
                      alt="photo"
                      className="w-full rounded-full object-cover"
                    />
                  </div>
                  <div className=" w-60 p-1 ">
                    <p className="text-white text-xl mb-2">{data.name}</p>
                    <img
                      src={data.logo}
                      alt="logo"
                      className="w-8 h-5 object-cover inline mr-3"
                    />
                    <p className="text-yellow-600 text-xs inline">
                      {data.country}
                    </p>
                  </div>
                </div>
                <div className="w-full p-3 text-white ">
                  <p>{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Figma() {
  return (
    <>
      {/* Rendering the HomeJam function */}
      <HomeJam />
    </>
  );
}

export default Figma;
