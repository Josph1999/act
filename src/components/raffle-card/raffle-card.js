import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, Stack, Typography, Rating } from "@mui/material";
import CounterIcon from "src/components/icons/CounterIcon";
import { useEffect, useState } from "react";
import TicketIcon from "../icons/TicketIcon";
import ImageCarousel from "../image-carousel/image-carousel";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import WinnerIcon from "../icons/WinnerIcon";
import TrophyIcon from "../icons/TrophyIcon";

export const RaffleCard = (props) => {
  const { raffle, setOpen, setRaffle, raffles, setRaffles } = props;

  const router = useRouter();

  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const endTime = new Date(raffle.ends_at).getTime();
      const timeDiff = endTime - currentTime;

      if (timeDiff <= 0) {
        setRemainingTime({ days: "0", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        const ongoingRaffles = raffles.filter((item) => item.id !== raffle.id);
        setRaffles(ongoingRaffles);
      }

      setRemainingTime({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [raffle]);

  const handleBuyTicket = (currentRaffle) => {
    try {
      setOpen(true);
      setRaffle(currentRaffle);
    } catch (error) {
      return toast.error("შეცდომა ბილეთის ყიდვის დროს!");
    }
  };

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
        <Box onClick={() => router.push(`/raffles/${raffle?.id}`)} sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography>{raffle?.created_by?.first_name}</Typography>
            <Rating value={raffle?.created_by?.rating} size="small" readOnly />
          </Box>
          <Typography gutterBottom fontSize="16px" variant="h5" fontWeight={700}>
            {raffle?.title}
          </Typography>
        </Box>
        <ImageCarousel
          photos={raffle?.photos}
          onClick={() => router.push(`/raffles/${raffle?.id}`)}
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          gap="10px"
          flexWrap="wrap"
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "9px" }}>
            {remainingTime !== null &&
            Number(remainingTime.hours) === 0 &&
            Number(remainingTime.minutes) === 0 &&
            Number(remainingTime.seconds) === 0 ? (
              <Typography color="success">რაფლი გათამაშდა!</Typography>
            ) : (
              <>
                <CounterIcon />
                <Typography align="center" fontWeight={300} fontSize={16} color={"#6366F1"}>
                  <span style={{ fontWeight: "700" }}>
                    {remainingTime !== null ? `${remainingTime.days} დღე` : null}
                  </span>{" "}
                  და{" "}
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {remainingTime !== null
                      ? `${
                          remainingTime.hours.toString().length > 1
                            ? remainingTime.hours
                            : "0" + remainingTime.hours
                        }`
                      : null}
                    :
                    {remainingTime !== null
                      ? `${
                          remainingTime.minutes.toString().length > 1
                            ? remainingTime.minutes
                            : "0" + remainingTime.minutes
                        }`
                      : null}
                    :
                    {remainingTime !== null
                      ? `${
                          remainingTime.seconds.toString().length > 1
                            ? remainingTime.seconds
                            : "0" + remainingTime.seconds
                        }`
                      : null}
                  </span>
                </Typography>
              </>
            )}
          </Box>
          <Button
            sx={{
              fontSize: "16px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              borderRadius: "0px",
              lineHeight: "2px",
            }}
            variant="outlined"
            fullWidth
            onClick={() => handleBuyTicket(raffle)}
            startIcon={<TicketIcon />}
          >
            ბილეთი: {raffle?.ticket_price}₾
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

RaffleCard.propTypes = {
  raffle: PropTypes.object.isRequired,
};
