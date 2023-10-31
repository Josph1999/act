import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../public/assets/DbefLogo.png";
  
export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return <Image alt="Dbef Logo" src={logo} width={80} height={46} />;
};
