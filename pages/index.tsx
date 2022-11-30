import Image from "next/image";
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from "react";
import VideoModal from "../components/Modal/videoModal";
import ModalPortal from "../components/ModalPortal";
import { useWindowSize } from "usehooks-ts";

const images = [
  { url: "/images/darkBackground01.png" },
  { url: "/images/darkBackground02.png" },
  { url: "/images/darkBackground03.png" },
  { url: "/images/darkBackground04.png" },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>();

  const { width, height } = useWindowSize();

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="w-screen h-screen">
      <main
        className={`flex flex-col justify-start items-center z-10 relative w-full h-full `}
      >
        <SimpleImageSlider
          width="100%"
          height="100%"
          images={images}
          autoPlay={true}
          showBullets={false}
          showNavs={false}
          style={{
            position: "absolute",
            zIndex: 0,
            objectFit: "contain",
          }}
        />
        <div className="flex flex-col items-center z-10 py-14">
          <Image
            src={`/images/logo03.png`}
            width={80}
            height={80}
            className="mb-14"
            alt="logo"
          />
          <Image
            src={`/images/mainText02.png`}
            className="mb-20"
            width={450}
            height={150}
            alt="mainText"
          />
          <p className="text-xl text-center mb-20 text-white">
            한치두치 어플리케이션은 귀염둥이 루미와 엉뚱한 뚱이와 함께 가고
            싶은곳을 갈 수 있는 앱이에요.
            <br /> 오늘 가고 싶은곳을 루미뚱이에게 말해봐요!
          </p>
          <svg
            onClick={openModal}
            className="w-16 h-16 cursor-pointer mb-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex justify-center items-center w-full space-x-2">
            <Image
              className="cursor-pointer"
              src={`/images/downloadAppStore.png`}
              width={200}
              height={200}
              alt="mainText"
            />
            <Image
              className="cursor-pointer"
              src={`/images/downloadPlayStore.png`}
              width={200}
              height={200}
              alt="mainText"
            />
          </div>
        </div>
      </main>
      <div className="flex justify-center items-center absolute bottom-0 mb-10 z-10 w-full ">
        <div className="flex">
          <div>
            <Image
              className="mr-10"
              src={`/images/mainText02.png`}
              width={150}
              height={50}
              alt="mainText"
            />
          </div>
          <div className="flex flex-col text-sm text-white mr-2">
            <span className="mb-1">
              엠엔유튜브(M&Utube) | 주소 전남 나주시 우정로 10 바동 303-1호
            </span>
            <span className="mb-1">
              대표 이광선 | 사업자등록번호 280-02-01104
            </span>
            <span>
              메일 yes@mnutube.com | 고객센터 010-6724-1227 | 대표전화
              061-334-3357
            </span>
            <div className="mt-4">
              <span className=" cursor-pointer">이용약관</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span className=" cursor-pointer">개인정보처리방침</span>
            </div>
          </div>
          <div className="flex justify-around w-40">
            <svg
              className="w-8 h-8 text-white "
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 576 512"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 512 512"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </svg>
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>
        </div>
      </div>
      {modalOpen ? (
        <ModalPortal>
          <VideoModal onClose={closeModal} />
        </ModalPortal>
      ) : null}
    </div>
  );
}
