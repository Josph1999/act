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
import Image from "next/image";
import copy from "clipboard-copy";
import { toast } from "react-toastify";
import { useLanguage } from "src/contexts/language-context";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import TBCLogo from "../icons/TBCLogo";
import BOGLogo from "../icons/BOGLogo";
export default function DonateBankTransfer({ goBack }) {
  const windowWidth = useWindowWidth();

  const { renderLanguage, renderFontFamily, language } = useLanguage();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          "@media (max-width: 800px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <Button
          onClick={goBack}
          startIcon={<ArrowCircleLeftOutlinedIcon />}
          sx={{ color: "black", paddingLeft: "0px" }}
        >
          {renderLanguage(`საბანკო გადარიცხვა`, `Bank Transfer`)}
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          gap: "90px",
          alignItems: "space-between",
          display: "flex",
          "@media (max-width: 800px)": {
            padding: "0px",
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <TBCLogo />
          <Typography
            fontWeight={700}
            sx={{ fontFeatureSettings: "'case' on" }}
          >
            {renderLanguage(`მიმღების დასახელება:`, `Beneficiary:`)}
          </Typography>
          <Typography>
            {renderLanguage(
              `დავით ბეჟუაშვილის განათლების ფონდი`,
              `DAVID BEZHUASHVILI EDUCATION FUND`
            )}
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontFeatureSettings: "'case' on" }}
          >
            {renderLanguage(`მიმღები ბანკი:`, `Account with Institution:`)}
          </Typography>
          <Typography>
            {renderLanguage(
              `ს.ს “თიბისი ბანკი”, TBCBGE22`,
              `JSC TBC Bank; Swift Code: TBCBGE22`
            )}
          </Typography>

          <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Box>
              <Typography
                fontWeight={700}
                sx={{ fontFeatureSettings: "'case' on" }}
              >
                {renderLanguage(`ლარის ანგარიში`, `GEL Account`)}
              </Typography>
              <Button
                endIcon={<ContentCopyIcon />}
                sx={{ paddingLeft: "0px", color: "black" }}
                onClick={async () => {
                  await copy("GE93TB7447436080100009");
                  toast.success(renderLanguage("დაკოპირდა", "Copied"));
                }}
              >
                GE93TB7447436080100009
              </Button>
            </Box>
            <Box>
              <Typography
                fontWeight={700}
                sx={{ fontFeatureSettings: "'case' on" }}
              >
                {renderLanguage(
                  `დოლარის და ევროს ანგარიში`,
                  `USD and EUR Account`
                )}
              </Typography>
              <Button
                sx={{ paddingLeft: "0px", color: "black" }}
                endIcon={<ContentCopyIcon />}
                onClick={async () => {
                  await copy("GE35TB7447436180100002");
                  toast.success(renderLanguage("დაკოპირდა", "Copied"));
                }}
              >
                GE35TB7447436180100002
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <BOGLogo />
          <Typography
            fontWeight={700}
            sx={{ fontFeatureSettings: "'case' on" }}
          >
            {renderLanguage(`მიმღების დასახელება: `, `Beneficiary: `)}
          </Typography>
          <Typography>
            {renderLanguage(
              `ააიპ დავით ბეჟუაშვილის განათლების ფონდი`,
              `NNLE DAVID BEZHUASHVILI EDUCATION FUND`
            )}
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontFeatureSettings: "'case' on" }}
          >
            {renderLanguage(`მიმღები ბანკი:`, `Account with Institution:`)}
          </Typography>
          <Typography>
            {renderLanguage(
              `სს "საქართველოს ბანკი"; გაგარინის ქ. 29ა, თბილისი, 0160`,
              `Bank of Georgia; 29a Gagarin street, Tbilisi 0160, Georgia`
            )}
          </Typography>
          <Box>
            <Typography
              fontWeight={700}
              sx={{ fontFeatureSettings: "'case' on" }}
            >
              {renderLanguage(
                `ლარის, დოლარისა და ევროს ანგარიში`,
                `GEL, EUR and EUR Account`
              )}
            </Typography>
            <Button
              endIcon={<ContentCopyIcon />}
              sx={{ paddingLeft: "0px", color: "black" }}
              onClick={async () => {
                await copy("GE50BG0000000515658700");
                toast.success(renderLanguage("დაკოპირდა", "Copied"));
              }}
            >
              GE50BG0000000515658700
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
