import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import { RaffleCard } from "../raffle-card/raffle-card";

const Raffles = ({ raffles, loading }) => {
  const iterations = Array.from({ length: 20 }, (_, index) => index);

  return (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={2}
      alignItems="center"
      alignContent="center"
      p={2}
    >
      {loading
        ? iterations.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton  height={430} variant="rectangular"/>
            </Grid>
          ))
        : raffles.map((raffle) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={raffle.id}>
              <RaffleCard raffle={raffle} />
            </Grid>
          ))}
    </Grid>
  );
};

export default Raffles;
