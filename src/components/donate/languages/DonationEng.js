import { Box, Typography } from "@mui/material";

export default function DonationEng() {
  return (
    <Box
      sx={{
        color: "black",
        "@media (max-width: 800px)": {
          fontSize: "12px",
        },
      }}
    >
      <Typography variant="h5">
        {" "}
        The future belongs to those who prepare for it today!
      </Typography>{" "}
      <br></br>
      Join our foundation in turning aspirations into achievements. <br></br>{" "}
      <br></br> At the David Bezhuashvili Education Organization, we’re more than
      just a charity organization – we’re a group of visionaries and idealists.
      Every donation you make is a seed planted in the soil of a better future.
      <br></br> <br></br>
      <Typography variant="h5">Our Heartbeat: Education for All</Typography>
      <br></br> Our goal is simple – to break down barriers to education and
      open doors of opportunities for bright minds. From scholarships to
      innovative learning programs to preservation of cultural heritage – we are
      standing at the frontiers of shaping a better tomorrow. <br></br>{" "}
    </Box>
  );
}
