import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import { authApi } from "src/api/auth";
import { useEffect } from "react";

export default function RateByStars({ user }) {
  const [value, setValue] = React.useState(user?.rating);

  const rateUser = async (newValue) => {
    try {
      const request = {
        rate_for: user?.id,
        rating: newValue,
      };

      const rating = await authApi.rateUser(request);

    } catch (error) {
      return toast.error("შეცდომა მომხმარებლის შეფასების დროს!");
    }
  };

  useEffect(() => {
    setValue(user?.rating)
  }, [user])

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        defaultValue={user?.rating}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          rateUser(newValue)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography>{user?.rating}</Typography>
    </Box>
  );
}
