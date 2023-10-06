import PrimaryButton from "../primaryButton/PrimaryButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export function Goback() {
  const navigate = useNavigate();
  return (
    <PrimaryButton
      title={<IoMdArrowRoundBack />}
      hanelClick={() => navigate(-1)}
    />
  );
}
