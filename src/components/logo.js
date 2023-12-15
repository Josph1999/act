import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../public/assets/HeaderLogo.png";

export const Logo = () => {
  const theme = useTheme();

  const fillColor = theme.palette.primary.main;

  return <Image alt="DBEF Logo" src={logo} width={46} height={46} />;
};
