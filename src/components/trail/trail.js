import { Box, Button, Typography } from "@mui/material";
import ArrowIcon from "../icons/Arrow";
import Link from "next/link";


const Trail = ({ routes }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FBD19B",
        padding: "2px",
        borderRadius: "0px 0px 12px 12px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        "@media (max-width: 800px)": {
          display: 'none'
        },
      }}
    >
      {routes.map(({ name, path }, index) => (
        <>
          <Typography key={path}>
            <Link href={path}>
              <Button>{name}</Button>
            </Link>
          </Typography>
          {index < routes.length - 1 && <ArrowIcon />}
        </>
      ))}
    </Box>
  );
};

export default Trail;
