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
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
export default function DonateBankTransfer({goBack}) {
  const windowWidth = useWindowWidth();

  const { renderLanguage, renderFontFamily, language } = useLanguage();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          padding: "0px 160px",
          "@media (max-width: 800px)": {
            padding: "0px 36px",
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
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "90px",
          padding: "0px 128px",
          alignItems: "space-between",
          "@media (max-width: 800px)": {
            padding: "0px",
            marginTop: "20px",
            justifyContent: "center",
          },
        }}
      >
        {/* <DonorBox width={windowSize > 500 ? "450px" : "350px"} /> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            padding: "28px",
          }}
        >
          <Image
            src={TBCLogo}
            width={windowWidth > 600 ? 300 : 200}
            height={windowWidth > 600 ? 90 : 60}
            alt="BOG Logo"
          />
          <Typography fontWeight={700}>
            {renderLanguage(`მიმღების დასახელება:`, `Beneficiary:`)}
          </Typography>
          <Typography>
            {renderLanguage(
              `დავით ბეჟუაშვილის განათლების ფონდი`,
              `DAVID BEZHUASHVILI EDUCATION FUND`
            )}
          </Typography>
          <Typography fontWeight={700}>
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
              <Typography fontWeight={700}>
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
              <Typography fontWeight={700}>
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
            padding: "28px",
          }}
        >
          <Image
            src={bogLogo}
            width={windowWidth > 600 ? 350 : 250}
            height={windowWidth > 600 ? 90 : 60}
            alt="BOG Logo"
          />
          <Typography fontWeight={700}>
            {renderLanguage(`მიმღების დასახელება: `, `Beneficiary: `)}
          </Typography>
          <Typography>
            {renderLanguage(
              `ააიპ დავით ბეჟუაშვილის განათლების ფონდი`,
              `NNLE DAVID BEZHUASHVILI EDUCATION FUND`
            )}
          </Typography>
          <Typography fontWeight={700}>
            {renderLanguage(`მიმღები ბანკი:`, `Account with Institution:`)}
          </Typography>
          <Typography>
            {renderLanguage(
              `სს "საქართველოს ბანკი"; გაგარინის ქ. 29ა, თბილისი, 0160`,
              `Bank of Georgia; 29a Gagarin street, Tbilisi 0160, Georgia`
            )}
          </Typography>
          <Box>
            <Typography fontWeight={700}>
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
