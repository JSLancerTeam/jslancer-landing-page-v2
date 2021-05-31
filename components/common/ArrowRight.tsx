import { FC } from "react";

interface IProps {
  className?: string;
  onClick?: () => void;
}
const ArrowRight: FC<IProps> = ({ className, onClick }) => (
  <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
    <path d="M0 0H81V81H0V0Z" fill="#00AEEF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M41.2075 40L35 33.9763L36.756 32L45 40L36.756 48L35 46.0237L41.2075 40Z" fill="white" />
  </svg>
)

export default ArrowRight;