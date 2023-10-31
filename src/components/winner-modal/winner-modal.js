import * as React from "react";
import Button from "@mui/material/Button";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ParticipantsDrawer from "../participants-drawer/participants-drawer";
import { useState } from "react";

export default function WinnerDialog({ open, onClose, winner, participants }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
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

  const [openParticipants, setOpenParticipants] = useState(false);

  return (
    <div>
      <Modal open={open} onClose={onClose}>
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
              <Typography variant="h6">გათამაშება დასრულებულია</Typography>
              <IconButton onClick={onClose}>
                <HighlightOffOutlinedIcon color="error" />
              </IconButton>
            </Box>
            <Box sx={{ borderTop: "1px solid #6366F1" }}></Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>გათამაშებაში გაიმარჯვა</Typography>
              <Button sx={{ borderRadius: "4px" }} variant="contained" color="success">
                {`${winner?.first_name} / ${winner?.last_name}`}
              </Button>
            </Box>
            <Button
              sx={{ borderRadius: "4px" }}
              fullWidth
              variant="outlined"
              onClick={() => setOpenParticipants(true)}
            >
              მონაწილეების ნახვა
            </Button>
          </Box>
          <ParticipantsDrawer
            participants={participants}
            open={openParticipants}
            onClose={() => setOpenParticipants(false)}
          />
        </Box>
      </Modal>
    </div>
  );
}
