import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../../public/assets/FooterEng.png";

export const FooterEng = () => {
  const theme = useTheme();

  return <Image alt="ACT Logo" src={logo} height={48} />;
};