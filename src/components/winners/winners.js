import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { rafflesApi } from "src/api/raffles";
import Carousel from "../carousel/carousel";
import Link from "next/link";
import { winnersApi } from "src/api/winners";
import WinnersCarousell from "../winners-carousell/winners-carousell";

export default function Winners({ setRaffle, setOpen }) {
  const [winners, setWinners] = useState([]);

  const getWinners = useCallback(async () => {
    const data = await winnersApi.getWinners()

    if (data?.data) {
        setWinners(data?.data);
    }
  }, []);

  useEffect(() => {
    getWinners();
  }, []);

  return (
    <Box sx={{backgroundImage: `url(/assets/Sliderbg.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: '15px',
          flexDirection: 'row',
          margin: "50px 0px",
          paddingLeft: '90px',
          "@media (max-width: 800px)": {
            fontSize: "22px",
            padding: '0px',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            "@media (max-width: 800px)": {
              fontSize: "22px",
            },
          }}
        >
          გამარჯვებულები
        </Typography>
        <Link href={"/winners"}>
          <Button sx={{ borderBottom: "1px solid black", borderRadius: "1px", color: "black" }}>
            ყველა
          </Button>
        </Link>
      </Box>
      <WinnersCarousell winners={winners}/>
    </Box>
  );
}
