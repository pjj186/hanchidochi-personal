import { ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById("modal-root") as HTMLElement;
  // 홈페이지 전역 div에 포탈 생성

  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
