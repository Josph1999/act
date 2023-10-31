import PropTypes from "prop-types";
import { Avatar, Badge, Box, Button, Divider, Rating, Typography } from "@mui/material";
import CounterIcon from "src/components/icons/CounterIcon";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Dates } from "./date-constants";

export const MyTicketCard = (props) => {
  const { ticket, onTicketModal, buyTicket } = props;

  const [windowSize, setWindowSize] = useState(null);

  const endsAt = new Date(ticket.ends_at);
  const boughtAt = new Date(ticket.created_at);

  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    hour12: false,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);
    }
  }, []);

  const renderDate = (dateObj) => {
    const formattedDateTime = dateObj.toLocaleDateString("en-US", options);

    const [month, day, year, at, time] = formattedDateTime.split(" ");

    const date = `${day} ${Dates[month.toLocaleLowerCase()]} ${year} ${time}`;

    return date;
  };

  const renderColor = () => {
    if (ticket.status === "ongoing") {
      return "primary";
    }
    if (ticket.status === "lost") {
      return "error";
    }
    if (ticket.status === "winner") {
      return "success";
    }
  };

  const renderBorderColor = () => {
    if (ticket.status === "ongoing") {
      return "#6366F1";
    }
    if (ticket.status === "lost") {
      return "#D90429";
    }
    if (ticket.status === "winner") {
      return "#52B788";
    }
  };

  const renderText = () => {
    if (ticket.status === "ongoing") {
      return `ბილეთი: ${ticket.price} ₾`;
    }
    if (ticket.status === "lost") {
      return `წაგებული`;
    }
    if (ticket.status === "winner") {
      return "დადასტურება";
    }
  };

  const renderFunction = () => {
    if (ticket?.status === "ongoing") {
      return buyTicket();
    }
    return;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: `1px solid ${renderBorderColor()}`,
        width: "100%",
        padding: "0px 0px",
        borderRadius: "5px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 0px",
          paddingBottom: "0px !important",
          "& .css-1amby0c-MuiCardContent-root:last-child": {
            paddingBottom: "0px",
          },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
            padding: "24px 32px",
            flexWrap: "wrap",
            "@media (max-width: 800px)": {
              padding: "10px 21px",
            },
          }}
        >
          <Image src={ticket?.raffle_first_photo_url} width={300} height={200} alt="ticket" />

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Typography align="left" gutterBottom fontSize="17px" variant="h5" fontWeight={700}>
              {ticket?.title}
            </Typography>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography> გათამაშების თარიღი: </Typography> <CounterIcon />{" "}
              <Typography align="center" fontWeight={700} fontSize={16} color="#6366F1">
                {renderDate(endsAt)}
              </Typography>{" "}
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                რაფლერი:{" "}
                <Avatar
                  sx={{
                    cursor: "pointer",
                    height: 30,
                    width: 30,
                  }}
                  src={ticket?.profile_picture_url}
                />{" "}
                {ticket?.first_name}
              </Typography>
              <Rating name="read-only" value={ticket?.rating} readOnly />
            </Box>
          </Box>
        </Box>
        {windowSize < 600 ? (
          <>
             <Box
              sx={{
                backgroundColor: renderBorderColor(),
                height: "25px",
                position: "relative",
                left: "95%",
                zIndex: 1000,
                top: "10px",
                borderRadius: "50px",
                width: '25px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                
              }}
              onClick={onTicketModal}
            >
              {ticket?.ticket_count > 100 ? '99+' : ticket?.ticket_count}
            </Box>
            <Button
              variant="contained"
              color={renderColor()}
              fullWidth
              sx={{
                borderRadius: "5px",
              }}
              // onClick={renderFunction}
            >
              {renderText()}
            </Button>
          </>
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: renderBorderColor(),
                height: "25px",
                position: "relative",
                left: "150px",
                zIndex: 1000,
                bottom: "10px",
                borderRadius: "50px",
                width: '25px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                
              }}
              onClick={onTicketModal}
            >
              {ticket?.ticket_count > 100 ? '99+' : ticket?.ticket_count}
            </Box>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& span": {
                  writingMode: "vertical-rl",
                  transform: "rotate(360deg)",
                },
                borderRadius: "5px",
              
              }}
              color={renderColor()}
              onClick={renderFunction}
            >
              <span>{renderText()}</span>
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

MyTicketCard.propTypes = {
  ticket: PropTypes.object.isRequired,
};
