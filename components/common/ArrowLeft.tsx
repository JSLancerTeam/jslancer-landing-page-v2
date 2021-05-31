import { FC } from "react";

interface IProps {
  className?: string;
  onClick?: () => void;
}
const ArrowLeft: FC<IProps> = ({ className, onClick }) => (
  <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
    <path d="M81 0H0V81H81V0Z" fill="#00AEEF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M39.7925 40L46 33.9763L44.244 32L36 40L44.244 48L46 46.0237L39.7925 40Z" fill="white" />
  </svg>
)

export default ArrowLeft;