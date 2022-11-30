import React from "react";
import { Rating } from "@mui/material";

interface CampModalProps {
  onClose: () => void;
}

const ReviewModal = ({ onClose }: CampModalProps) => {
  return (
    <div className="fixed top-0 bg-[#00000034] w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-[#ffffff] max-h-max p-4 w-fit m-5 rounded-lg shadow-lg border border-black">
        <div className="w-full flex justify-center mb-2">
          <h1 className="text-lg font-semibold text-black ">
            한치두치를 평가해주세요!
          </h1>
        </div>
        <div className="w-full flex justify-center items-center rounded-md">
          <Rating size="large" precision={0.5} />
        </div>
        <div className="w-full flex justify-center mt-2">
          <h1 className=" text-black font-semibold">의견을 남겨주세요.</h1>
        </div>
        <textarea className=" resize-none rounded-md p-2 text-sm w-96 my-2 border border-black" />
        <div className="w-full flex justify-around mt-4">
          <button
            className=" w-36 h-8 hover:text-white hover:bg-black hover:border-white  text-black border border-black rounded-md transition-all"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="w-36 h-8 hover:text-white hover:bg-black hover:border-white text-black border border-black rounded-md transition-all"
            onClick={onClose}
          >
            점수주기
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ReviewModal);
