import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DonorBox from "../donorbox/donorbox";
import { IconButton } from "@mui/material";
import DonationKa from "../donate/languages/donationKa";
import PaypalIcon from "../icons/PayPalIcon";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useLanguage } from "src/contexts/language-context";
import DonationEng from "../donate/languages/DonationEng";
import { useState } from "react";
import DonateBankTransfer from "../donate-bank-transfer/donate-bank-transfer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#F0F5FE",
  padding: "24px",
  width: "824px",
  "@media (max-width: 1000px)": {
    width: "80%",
  },
  "@media (max-width: 800px)": {
    height: "80%",
    fontSize: "12px",
    overflowY: "scroll",
  },
};

export default function DonateModal({ open, onClose, windowSize, setOpenDonorBox }) {
  const { renderLanguage, language } = useLanguage();

  const [selected, setSelected] = useState(null);

  console.log("LANGUAGE:", language);

  // const renderComponent = language === "KA" ? <DonationKa /> : <DonationEng />;

  const renderComponent = () => {
    if (language === "KA") {
      return <DonationKa />;
    }

    return <DonationEng />;
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          onClose();
          setSelected(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "40px",
            }}
          >
            <IconButton
              onClick={() => {
                onClose();
                setSelected(null);
              }}
            >
              <HighlightOffIcon style={{ marginRight: "5px" }} />{" "}
              {renderLanguage("დახურვა", "close")}
            </IconButton>
          </Box>
          {!selected ? renderComponent() : null}
          {!selected && (
            <Box
              display="flex"
              marginTop="24px"
              gap="16px"
              sx={{
                "@media (max-width: 800px)": {
                  flexWrap: "wrap",
                },
              }}
            >
              <Button
                onClick={() => {
                  setOpenDonorBox(true)
                  onClose()
                }}
                variant="contained"
                fullWidth
                sx={{ padding: "16px 32px" }}
              >
                <PaypalIcon />
              </Button>
              <Button
                onClick={() => setSelected("bankTransfer")}
                variant="outlined"
                fullWidth
                sx={{ padding: "16px 32px" }}
              >
                {renderLanguage("საბანკო გადარიცხვა", "Bank Transfer")}
              </Button>
            </Box>
          )}
          {selected === "bankTransfer" ? (
            <DonateBankTransfer goBack={() => setSelected(null)} />
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
