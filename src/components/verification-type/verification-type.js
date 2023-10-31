import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import EmailIcon from "@mui/icons-material/Email";
import { authApi } from "src/api/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Divider, IconButton, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  outline: "none",
  gap: "25px",
  p: 4,
};

export default function VerificationType({ open, onClose, setType, user }) {
  const [selectedType, setSelectedType] = useState("phone");

  const handleSelectMobile = async () => {
      setSelectedType("phone");
  };

  const handleSelectEmail = async () => {
      setSelectedType("email");
  };

  const handleSendCode = async () => {
    try {
      const result = await authApi.sendVerification({
        type: selectedType,
        email: user.email,
        phone: user.phone,
        personal_id: user.personal_id,
      });
      if (result?.success) {
        toast.success("კოდი წარმატებით გამოიგზავნა");
        onClose();
        setType(selectedType)
        return;
      }
      if (result?.response?.status === 409) {
        setType(null);
        return toast.error("მომხმარებელი უკვე არსებობს");
      }
      toast.error("შეცდომა კოდის გაგზავნის დროს");
      setType(null);
    } catch (error) {
      setType(null);
      return toast.error("შეცდომა კოდის გაგზავნის დროს");
    }
  }

  return (
    <div style={{ outline: "none" }}>
      <Modal
        open={open}
        onClose={onClose}
        sx={{ outline: "none" }}
        disableAutoFocus
        disableEnforceFocus
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontSize={18} color="#6366F1">
              ერთჯერადი კოდით ვერიფიცირება
            </Typography>
         
            <IconButton onClick={onClose}>
              <HighlightOffOutlinedIcon color="error" />
            </IconButton>
          </Box>
          <Box sx={{borderTop: '1px solid #6366F1', width: '100%'}}></Box>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #6366F1",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Button
              startIcon={<MobileFriendlyIcon />}
              fullWidth
              variant={selectedType === "phone" && "contained"}
              onClick={handleSelectMobile}
              sx={{ borderRadius: "8px" }}
            >
              ტელეფონი
            </Button>
            <Button
              sx={{ borderRadius: "8px" }}
              startIcon={<EmailIcon />}
              fullWidth
              variant={selectedType === "email" && "contained"}
              onClick={handleSelectEmail}
            >
              მეილი
            </Button>
          </Box>
          <Button variant="contained" sx={{ borderRadius: "8px" }} onClick={handleSendCode}>
            კოდის გაგზავნა
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
