import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../public/assets/HeaderLogo.jpeg";

export const Logo = () => {
  const theme = useTheme();

  const fillColor = theme.palette.primary.main;

  return <Image alt="ACT Logo" src={logo} width={46} height={46} />;
};
