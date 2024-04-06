import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import MainLogo from "../icons/MainLogo";
import { Badge } from "@mui/material";
import DonorBox from "../donorbox/donorbox";
import { useWindowWidth } from "../helpers/useWindowWidth";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import bogLogo from "../../../public/assets/bog_eng_vertical.png";
import TBCLogo from "../../../public/assets/download.png";
import Image from "next/image";
import copy from "clipboard-copy";
import { toast } from "react-toastify";
import { useLanguage } from "src/contexts/language-context";
import DonationKa from "./languages/donationKa";
import DonationEng from "./languages/DonationEng";
import DonateBankTransfer from "../donate-bank-transfer/donate-bank-transfer";
import PaypalIcon from "../icons/PayPalIcon";
import { useState } from "react";
import DonateModal from "../donate-modal/donate-modal";

export default function Donate() {
  const [selected, setSelected] = useState(null);

  const windowSize = useWindowWidth();

  const { renderLanguage, renderFontFamily, language } = useLanguage();
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(/assets/DonationBack.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "385px",
              width: "100%",
              borderRadius: "10px",
              marginTop: "100px",
            }}
          ></Box>

          {selected === "bankTransfer" ? null : (
            <>
              <Box
                sx={{
                  padding: "16px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {language === "KA" ? <DonationKa /> : <DonationEng />}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "40px",
                  padding: "0px 128px",
                  "@media (max-width: 800px)": {
                    padding: "0px 36px",
                    flexWrap: "wrap",
                  },
                }}
              >
                <Button
                  onClick={() => setSelected("paypal")}
                  variant="outlined"
                  fullWidth
                  sx={{ padding: "16px 32px" }}
                >
                  <PaypalIcon />
                  <Typography color="white">a</Typography>
                </Button>
                <Button
                  onClick={() => setSelected("bankTransfer")}
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: "#047852",
                    borderColor: "#047852",
                    padding: "16px 32px",
                  }}
                >
                  {renderLanguage(`სანანკო გადარიცხვა`, `Bank Transfer`)}
                </Button>
              </Box>
            </>
          )}

          {selected === "bankTransfer" ? (
            <DonateBankTransfer goBack={() => setSelected(null)} />
          ) : null}
          <DonateModal
            open={selected === "paypal"}
            onClose={() => setSelected(null)}
            windowSize={windowSize > 500 ? "450px" : "350px"}
          />
        </Box>
      </Box>
    </div>
  );
}
