import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import TicketIcon from "../icons/TicketIcon";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useState } from "react";
import BuyTicketModal from "../buy-ticket.js/buy-ticket";

export default function ParticipantsDrawer({
  open,
  onClose,
  participants,
  totalTickets,
  raffle,
  userTickets,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    height: "650px",
    maxHeight: "500px",
    overflowY: "auto",
    p: 4,
    display: "flex",
    flexDirection: "column",
    outline: "none",
    gap: "20px",
    borderRadius: "16px",
    border: "1px solid #6366F1",
    "@media (max-width: 800px)": {
      width: "90%",
    },
  };

  const [buyTicket, setBuyTicket] = useState(false);


  return (
    <Modal
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "white",
          width: 280,
          padding: "30px",
        },
      }}
      variant="temporary"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontSize={18}>
              მონაწილეები
            </Typography>
            <IconButton onClick={onClose}>
              <HighlightOffOutlinedIcon color="error" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #6366F1", width: "100%" }}></Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {raffle !== undefined ? (
            <>
              <Typography fontSize={14}>შენ გაქვს გათამაშების</Typography>
              <Button variant="outlined" startIcon={<TicketIcon />} sx={{ borderRadius: "4px" }}>
                {userTickets} ბილეთი
              </Button>
            </>
          ) : null}
        </Box>
        <Box
          sx={{
            width: "500px",
            "@media (max-width: 800px)": {
              width: "90%",
            },
            height: "500px",
            maxHeight: "500px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            gap: "20px",
            "&::-webkit-scrollbar": {
              width: "5px",
              backgroundColor: "#E0E0FC",
              borderRadius: "12px",
              height: "6px",
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                height: "8px",
              },
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#6366F1",
              borderRadius: "12px",
            },
          }}
        >
          {participants?.length > 0 &&
            participants?.map((participant) => {
              return (
                <>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                      {participant?.first_name} / {participant?.last_name}
                    </Typography>
                    <Typography sx={{ alignItems: "center", display: "flex", gap: "20px" }}>
                      <TicketIcon />
                      {participant?.ticket_count}
                    </Typography>
                  </Box>
                  <Box sx={{ borderTop: "1px solid #D1D2FB", width: "100%" }}></Box>
                </>
              );
            })}
        </Box>
        {raffle !== undefined  ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography fontSize={14}>
                მოგების ალბათობის გასაზრდელად შეიძინე დამატებითი ბილეთები
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: "4px" }}
                onClick={() => setBuyTicket(true)}
              >
                {" "}
                ბილეთი {raffle?.ticket_price} ₾{" "}
              </Button>
            </Box>
            <BuyTicketModal raffle={raffle} onClose={() => setBuyTicket(false)} open={buyTicket} />
          </>
        ) : null}
      </Box>
    </Modal>
  );
}
