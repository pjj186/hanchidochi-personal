import React from "react";

interface CampModalProps {
  onClose: () => void;
}

const VideoModal = ({ onClose }: CampModalProps) => {
  return (
    <div className="fixed top-0 bg-[#00000034] w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-white max-h-max p-4 w-full m-5 rounded-md shadow-md">
        <div className="w-full h-[800px] flex justify-center items-center bg-slate-500 rounded-md relative">
          <svg
            className="w-10 h-10 text-black cursor-pointer absolute top-4 right-4"
            onClick={onClose}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          비디오 들어갈 부분
        </div>
      </div>
    </div>
  );
};

export default React.memo(VideoModal);
