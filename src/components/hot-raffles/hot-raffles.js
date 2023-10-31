import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { rafflesApi } from "src/api/raffles";
import Carousel from "../carousel/carousel";
import Link from "next/link";

export default function HotRaffles({ setRaffle, setOpen }) {
  const [raffles, setRaffles] = useState([]);

  const getRaffles = useCallback(async () => {
    const data = await rafflesApi.getRaffles('all', 1);

    if (data?.data) {
      setRaffles(data?.data);
    }
  }, []);

  useEffect(() => {
    getRaffles();
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
          უახლესი რაფლები
        </Typography>
        <Link href={"/raffles"}>
          <Button sx={{ borderBottom: "1px solid black", borderRadius: "1px", color: "black" }}>
            ყველა რაფლი
          </Button>
        </Link>
      </Box>
      <Carousel raffles={raffles} setRaffles={setRaffles}/>
    </Box>
  );
}
