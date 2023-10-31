import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Rating,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { rafflesApi } from "src/api/raffles";
import Carousel from "../carousel/carousel";
import RafflePhotos from "../raffle-photos/raffle-photos";
import TrophyIcon from "../icons/TrophyIcon";
import parse from "html-react-parser";
import MoreIcon from "../icons/MoreIcon";
import Trail from "../trail/trail";
import { useMockedUser } from "src/hooks/use-mocked-user";
import ParticipantsDrawer from "../participants-drawer/participants-drawer";
import BuyTicketModal from "../buy-ticket.js/buy-ticket";
import PeopleIcon from "../icons/PeopleIcon";
import TicketIcon from "../icons/TicketIcon";
import WinnerDialog from "../winner-modal/winner-modal";

export default function RaffleInfo({ setTitle }) {
  const [raffle, setRaffle] = useState(null);
  const [sameRaffles, setSameRaffles] = useState([]);
  const [remainingTime, setRemainingTime] = useState(null);
  const [chance, setChance] = useState(0);
  const [participants, setParticipants] = useState([]);
  const [totalTickets, setTotalTickets] = useState(0);
  const [participantDrawer, setParticipantDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [buyTicket, setBuyTicket] = useState(false);
  const [winnerModal, setWinnerModal] = useState(true);
  const [userTickets, setUserTickets] = useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "simple-popover" : undefined;

  const router = useRouter();

  const user = useMockedUser();

  const params = router.query;

  const id = params.id;

  const getRaffle = useCallback(async () => {
    if (id === undefined) {
      return;
    }

    const data = await rafflesApi.getRaffleById(id, user?.id);

    if (data) {
      setRaffle(data?.data);
      setChance(data?.chance);
      setParticipants(data?.participants);
      setTotalTickets(data?.ticketCount);
      setTitle(data?.data?.title);
      setUserTickets(data?.userTickets)
    }
  }, [id]);

  const getSameRaffles = useCallback(async () => {
    if (raffle) {
      const data = await rafflesApi.getRaffles(raffle?.category, 1);

      if (data) {
        setSameRaffles(data?.data);
      }
    }
  }, [raffle]);

  useEffect(() => {
    getRaffle();
  }, [id]);

  useEffect(() => {
    getSameRaffles();
  }, [raffle]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const endTime = new Date(raffle?.ends_at).getTime();
      const timeDiff = endTime - currentTime;

      if (timeDiff <= 0) {
        // Raffle has ended
        setRemainingTime({ days: "0", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      setRemainingTime({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [raffle]);

  const handleSeeParticipants = (event) => {
    if (Number(chance) === 0) {
      setAnchorEl(event.currentTarget);
      return;
    }
    setParticipantDrawer(true);
  };

  return (
    <Box
      sx={{
        paddingLeft: "60px",
        paddingRight: "60px",
        "@media (max-width: 800px)": {
          paddingLeft: "30px",
          paddingRight: "30px",
        },
        backgroundImage: "url(/assets/Sliderbg.png)",
      }}
    >
      <Trail
        routes={[
          { name: "მთავარი", path: "/" },
          {
            name: "ყველა რაფლი",
            path: "/raffles",
          },
          {
            name: "ტექნიკა",
            path: `/raffles?${raffle?.category}`,
          },
          {
            name: `${raffle?.title}`,
            path: `/raffles/${raffle?.id}`,
          },
        ]}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "50px",
          gap: "32px",
          "@media (max-width: 800px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <RafflePhotos photos={raffle?.photos || []} />
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <Typography fontWeight={700} variant="h5">
                {raffle?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  "@media (max-width: 800px)": {
                    marginTop: "30px",
                  },
                }}
              >
                <Avatar
                  width={60}
                  height={60}
                  src={raffle?.created_by?.profile_picture?.[0]?.url}
                />
                <Typography>{raffle?.created_by?.first_name}</Typography>
                <Divider orientation="vertical" />
                <Rating value={raffle?.created_by?.rating} readOnly />
                <IconButton onClick={() => router.push(`/profiles/${raffle?.created_by?.id}`)}>
                  <MoreIcon />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: "15px",
                "@media (max-width: 800px)": {
                  flexWrap: "wrap",
                },
              }}
            >
              {raffle?.status === "gambled" ? (
                <Box
                  onClick={() => setWinnerModal(true)}
                  sx={{
                    width: "900px",
                    border: "1px solid #B1B3F8",
                    borderRadius: "4px",
                    padding: "16px 0px",
                    cursor: "pointer",
                    "@media (max-width: 800px)": {
                      width: "100%",
                    },
                    backgroundColor: raffle?.status !== "gambled" ? "#fff" : "#6366F1",
                  }}
                >
                  <Typography sx={{ color: "#fff", cursor: "pointer" }} textAlign="center">
                    გათამაშება დასრულებულია
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "900px",
                    border: "1px solid #B1B3F8",
                    borderRadius: "4px",
                    padding: "16px 0px",
                    cursor: "pointer",
                    "@media (max-width: 800px)": {
                      width: "100%",
                    },
                    backgroundColor: raffle?.status !== "gambled" ? "#fff" : "#6366F1",
                  }}
                >
                  <Typography align="center" fontWeight={300} fontSize={14}>
                    {" "}
                    დარჩენილია{" "}
                    <span style={{ fontWeight: "700" }}>
                      {remainingTime !== null ? `${remainingTime.days} დღე` : null}
                    </span>{" "}
                    და{" "}
                    <span style={{ fontWeight: "700" }}>
                      {remainingTime !== null ? `${remainingTime.hours}` : null}:
                      {remainingTime !== null ? `${remainingTime.minutes}` : null}:
                      {remainingTime !== null ? `${remainingTime.seconds}` : null}
                    </span>
                  </Typography>
                </Box>
              )}
            </Box>

            {raffle?.status !== "gambled" ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: "15px",
                  "@media (max-width: 800px)": {
                    flexWrap: "wrap",
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "4px",
                    width: "100%",
                    "@media (max-width: 800px)": {
                      width: "100%",
                    },
                  }}
                  onClick={() => setBuyTicket(true)}
                >
                  ბილეთი {raffle?.ticket_price} ₾
                </Button>
                <Button
                  variant="outlined"
                  aria-describedby={popoverId}
                  sx={{
                    borderRadius: "4px",
                    width: "100%",
                    "@media (max-width: 800px)": {
                      width: "100%",
                    },
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff !important",
                    },
                  }}
                  onClick={handleSeeParticipants}
                >
                  მონაწილეების ნახვა
                </Button>
                <Popover
                  id={popoverId}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableScrollLock={false}
                  disablePortal={false}
                >
                  <Typography sx={{ p: 2 }}>მონაწილეების სანახავად შეიძინეთ ბილეთი</Typography>
                </Popover>
              </Box>
            ) : null}
          </Box>
          <Box sx={{ marginTop: "30px", backgroundColor: "#FFF" }}>
            {" "}
            <Typography fontWeight={700} textAlign="left">
              პროდუქტის აღწერა
            </Typography>
            {parse(`${raffle?.description}`)}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ marginTop: "50px" }}>
        <Typography fontWeight={700} variant="h5">
          შეიძლება დაინტერესდეთ
        </Typography>
        <Box sx={{ marginTop: "50px" }}>
          <Carousel raffles={sameRaffles} setRaffles={setSameRaffles}/>
        </Box>
      </Box>
      <ParticipantsDrawer
        open={participantDrawer}
        onClose={() => setParticipantDrawer(false)}
        participants={participants}
        totalTickets={totalTickets}
        raffle={raffle?.status !== "gambled" ? raffle : null}
        userTickets={userTickets}
      />
      <BuyTicketModal raffle={raffle} onClose={() => setBuyTicket(false)} open={buyTicket} />
      <WinnerDialog
        open={raffle?.status !== "gambled" ? false : winnerModal}
        onClose={() => setWinnerModal(false)}
        winner={raffle?.winner[0]?.ticket?.user}
        participants={participants}
      />
    </Box>
  );
}
