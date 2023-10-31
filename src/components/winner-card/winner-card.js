import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, Stack, Typography, Rating } from "@mui/material";
import CounterIcon from "src/components/icons/CounterIcon";
import { useEffect, useState } from "react";
import TicketIcon from "../icons/TicketIcon";
import ImageCarousel from "../image-carousel/image-carousel";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import TrophyIcon from "../icons/TrophyIcon";
import WinnerIcon from "../icons/WinnerIcon";

export const WinnerCard = (props) => {
  const { winner } = props;

  const router = useRouter();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        borderRadius: 0,
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.25) !important",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 24px" }}
      >
        <Box onClick={() => router.push(`/raffles/${winner?.raffle?.id}`)} sx={{cursor: 'pointer'}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography>{winner?.raffle?.created_by?.first_name}</Typography>
            <Rating readOnly value={winner?.raffle?.created_by?.rating} size="small" />
          </Box>
          <Typography gutterBottom fontSize="16px" variant="h5" fontWeight={700}>
            {winner?.raffle.title}
          </Typography>
        </Box>
        <ImageCarousel photos={winner?.raffle?.photos} onClick={() => router.push(`/raffles/${winner?.raffle?.id}`)}/>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          gap="10px"
          flexWrap="wrap"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                right: "70px",
                top: "15px",
                transform: "rotateY(180deg)",
                "@media (max-width: 800px)": {
                    right: "80px",
                },
              }}
            >
              <WinnerIcon />
            </Box>
            <Box
              variant="contained"
              color="success"
              sx={{
                padding: "10px",
                backgroundColor: "#52B788",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "4px",
                position: "absolute",
                zIndex: "2",
                width: "180px",
                textAlign: "center",
              }}
            >
              <Typography
                fontSize={12}
                color="#FFF"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}
              >
                <TrophyIcon color="#FFF" /> {winner?.ticket?.user?.first_name} / {" "}
                {winner?.ticket?.user?.last_name}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                left: "70px",
                top: "15px",
                "@media (max-width: 800px)": {
                    left: "80px",
                },
              }}
            >
              <WinnerIcon />
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

WinnerCard.propTypes = {
  winner: PropTypes.object.isRequired,
};
