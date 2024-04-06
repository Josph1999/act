import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DonorBox from "../donorbox/donorbox";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '500px',
  "@media (max-width: 700px)": {
    width: '80%'
  },
};

export default function DonorBoxModal({ open, onClose, windowSize }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            {" "}
            <IconButton
            onClick={onClose}
              sx={{ backgroundColor: "#4338CA", marginBottom: "10px" }}
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Box sx={{maxHeight: '80vh', overflow: 'auto'}}>
            {" "}
            <DonorBox width={windowSize > 700 ? 500 : 300} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
