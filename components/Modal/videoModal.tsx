import React from "react";

interface CampModalProps {
  onClose: () => void;
}

const VideoModal = ({ onClose }: CampModalProps) => {
  return (
    <div className="fixed top-0 bg-[#00000034] w-screen h-screen z-10 flex items-center justify-center">
      <span>안녕하세요.</span>
    </div>
  );
};

export default React.memo(VideoModal);
