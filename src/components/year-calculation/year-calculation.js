import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function YearCalculation() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "128px",
        alignItems: "center",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          width: "584px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #8A81F8",
          alignItems: "center",
          padding: "32px 0px",
          "@media (max-width: 800px)": {
            width: "100%",
          },
        }}
      >
        <Typography sx={{ fontFamily: "UpperCaseGeo" }}>წლიური ანგარიში 2021</Typography>
        <DownloadIcon />
      </Box>
      <Box
        sx={{
          width: "584px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #8A81F8",
          alignItems: "center",
          padding: "32px 0px",
          "@media (max-width: 800px)": {
            width: "100%",
          },
        }}
      >
        <Typography sx={{ fontFamily: "UpperCaseGeo" }}>წლიური ანგარიში 2021</Typography>
        <DownloadIcon />
      </Box>
      <Box
        sx={{
          width: "584px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #8A81F8",
          alignItems: "center",
          "@media (max-width: 800px)": {
            width: "100%",
          },
          padding: "32px 0px",
        }}
      >
        <Typography sx={{ fontFamily: "UpperCaseGeo" }}>წლიური ანგარიში 2021</Typography>
        <DownloadIcon />
      </Box>
      <Box
        sx={{
          width: "584px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #8A81F8",
          alignItems: "center",
          padding: "32px 0px",
          "@media (max-width: 800px)": {
            width: "100%",
          },
        }}
      >
        <Typography sx={{ fontFamily: "UpperCaseGeo" }}>წლიური ანგარიში 2021</Typography>
        <DownloadIcon />
      </Box>
    </Box>
  );
}
