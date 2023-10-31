import { Box, Grid } from "@mui/material";
import React from "react";
import { RaffleCard } from "../raffle-card/raffle-card";
import { WinnerCard } from "../winner-card/winner-card";

const AllWinners = ({ winners }) => {
  return (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={2}
      alignItems="center"
      alignContent="center"
      p={2}
    >
      {winners.map((winner) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={winner.id}>
          <WinnerCard winner={winner} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllWinners;
