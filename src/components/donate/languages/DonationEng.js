import { Box, Typography } from "@mui/material";

export default function DonationEng() {
  return (
    <Box
      sx={{
        padding: "32px 128px",
        "@media (max-width: 800px)": {
          padding: "20px",
          marginTop: "20px",
        },
      }}
    >
      <Typography variant="h5">
        {" "}
        The future belongs to those who prepare for it today!
      </Typography>{" "}
      <br></br>
      Join our foundation in turning aspirations into achievements. <br></br>{" "}
      <br></br> At the David Bezhuashvili Education Foundation, we’re more than
      just a charity organization – we’re a group of visionaries and idealists.
      Every donation you make is a seed planted in the soil of a better future.
      <br></br> <br></br>
      <Typography variant="h5">Our Heartbeat: Education for All</Typography>
      <br></br> Our goal is simple – to break down barriers to education and
      open doors of opportunities for bright minds. From scholarships to
      innovative learning programs to preservation of cultural heritage – we are
      standing at the frontiers of shaping a better tomorrow. <br></br>{" "}
      <br></br>
      <Typography variant="h5">
        Your Donation will contribute to:
      </Typography>{" "}
      <br></br>
      Granting scholarships to aspiring students.<br></br> <br></br> Equipping
      educational spaces with necessary tools.<br></br> <br></br> Encouraging
      global learning through exchanges.<br></br> <br></br>
      Preservation of Cultural Heritage. <br></br> <br></br>Investing in
      technology and innovation.<br></br> <br></br>
      When you donate, you do more than help – you inspire and uplift. With each
      donation, you join a heartfelt mission to empower, educate, and transform
      the youth. By supporting us, you’re part of a greater good!
    </Box>
  );
}
