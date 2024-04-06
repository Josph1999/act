import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../../public/assets/FooterKa.png";

export const FooterKa = () => {
  const theme = useTheme();

  const fillColor = theme.palette.primary.main;

  return <Image alt="ACT Logo" src={logo} height={48} />;
};