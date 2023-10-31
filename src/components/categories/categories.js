import React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { rafflesApi } from "src/api/raffles";
import Carousel from "../carousel/carousel";
import categories from "../../constants/categories";
import { useRouter } from "next/router";
import TicketIcon from "../icons/TicketIcon";
import SelectCategory from "../select-category/select-category";

export default function Categories({ setOpen, setRaffle, category, changeCategory }) {
  const [raffles, setRaffles] = useState([]);

  const router = useRouter();

  const getRaffles = useCallback(async () => {
    const data = await rafflesApi.getRaffles(category);

    if (data?.data) {
      setRaffles(data?.data);
    }
  }, [category]);

  useEffect(() => {
    getRaffles();
  }, [category]);

  const tabStyles = () => ({
    ".MuiTab-textColorPrimary.Mui-selected": {
      color: "white",
      backgroundColor: "#6366F1",
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/Sliderbg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginBottom: "50px",
          flexDirection: "column",
          paddingLeft: "50px",
          "@media (max-width: 800px)": {
            paddingLeft: "0px",
          },
        }}
      >
        <Box
          sx={{
            margin: "50px 0px",
            paddingLeft: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
            "@media (max-width: 800px)": {
              paddingLeft: "0px",
              fontSize: "22px",
              marginTop: "100px",
              marginBottom: "20px",
            },
          }}
        >
          <Typography
            variant="h4"
            textTransform="uppercase"
            sx={{
              "@media (max-width: 800px)": {
                fontSize: "22px",
              },
            }}
          >
            კატეგორიები
          </Typography>
          <Button
            sx={{
              borderBottom: "1px solid black",
              borderRadius: "1px",
              color: "black",
            }}
            onClick={() => router.push(`/raffles`)}
          >
            ყველა რაფლი
          </Button>
        </Box>
        <SelectCategory category={category} changeCategory={changeCategory} />
      </Box>
      <Carousel raffles={raffles} setRaffle={setRaffle} setOpen={setOpen} setRaffles={setRaffles}/>
    </Box>
  );
}
