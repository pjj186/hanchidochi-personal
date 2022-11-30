import React from "react";

interface CampModalProps {
  onClose: () => void;
}

const VideoModal = ({ onClose }: CampModalProps) => {
  return (
    <div className="fixed top-0 bg-[#00000034] w-screen h-screen z-10 flex items-center justify-center">
      <div className="bg-white max-h-max p-4 w-fit m-5 rounded-md shadow-md">
        <div className=" w-fit h-[800px] flex justify-center items-center  rounded-md relative">
          <svg
            className="w-10 h-10 text-black cursor-pointer absolute top-4 right-4 z-10"
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
          <video
            src={`/videos/MainVideo.mp4`}
            className=" h-[800px] "
            controls
            autoPlay
          ></video>
        </div>
      </div>
    </div>
  );
};

export default React.memo(VideoModal);
